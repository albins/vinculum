(ns vinculum.core
  (:require [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [compojure.core :refer [defroutes ANY routes]]
            [compojure.handler :as handler]
            [vinculum.database :as db]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [liberator.representation :refer [ring-response render-map-generic]]
            [clojure.java.jdbc :as jdbc]))

(def accepted-types ["application/edn" "text/plain" "text/html" "application/json"])

(defresource parameter [realm]
  :available-media-types ["text/plain"]
  :handle-ok (fn [_] (format "The text is %s" realm)))

(defn resource-exists [ctx rfn]
  (if-let [resource (rfn)] {::resource resource}
          false))

;; convert the body to a reader. Useful for testing in the repl
;; where setting the body to a string is much simpler.
(defn body-as-string [ctx]
  (if-let [body (get-in ctx [:request :body])]
    (condp instance? body
      java.lang.String body
      (slurp (io/reader body)))))

;; Serialising Java.SQL.Date to JSON:
(extend-type java.sql.Date
  json/JSONWriter
  (-write [date out]
    (json/-write (str date) out)))

;; For PUT and POST check if the content type is json.
(defn check-content-type [ctx content-types]
  (if (#{:put :post} (get-in ctx [:request :request-method]))
    (or
     (some #{(get-in ctx [:request :headers "content-type"])}
           content-types)
     [false {:message "Unsupported Content-Type"}])
    true))

;; For PUT and POST parse the body as json and store in the context
;; under the given key.
(defn parse-json [context key]
  (when (#{:put :post} (get-in context [:request :request-method]))
    (try
      (if-let [body (body-as-string context)]
        (let [data (json/read-str body)]
          [false {key data}])
        {:message "No body"})
      (catch Exception e
        (.printStackTrace e)
        {:message (format "IOException: %s" (.getMessage e))}))))


;; We probably want to do something like this
;; from: http://codeofrob.com/entries/the-http-api-for-my-clojure-document-database.html
;; Abstract away database into database

;; Conflict handling, see: http://www.codeproject.com/Articles/808298/Combining-Liberator-and-Korma-to-Build-a-Web-Servi
(defn create-routes [instance]
  (routes
    (ANY ["/weight/:id-str", :id-str #"[0-9]+"] [id-str]
         (let [id (read-string id-str)]
           (resource
            :allowed-methods [:get :delete]
            :exists? (fn [ctx] (resource-exists
                               ctx
                               #(db/load-data :weight instance id)))
            :available-media-types accepted-types
            :handle-ok (fn [ctx] (::resource ctx)))))
    ;; Should be POST, see: https://clojure-liberator.github.io/liberator/tutorial/all-together.html
    ;; Maybe also implement processable? to ensure submitted data checks out.
    ;; Also, database connection should probably be stored in context.
    (ANY ["/weight"] []
      (resource
       :allowed-methods [:get :post]
       :known-content-type? #(check-content-type % ["application/json"])
       :malformed? #(parse-json % ::data)
       :post! #(db/put-data :weight instance (% ::data))
       ;; (fn [ctx]
       ;;   (let [new-weight (::data ctx)]
       ;;     (db/put-data :weight instance new-weight)))
       :exists? (fn [ctx] (resource-exists
                          ctx
                          #(db/load-all :weight instance)))
       :available-media-types accepted-types
       :handle-ok (fn [ctx] (::resource ctx))))))

(defn create-http-server [instance]
  (let [db-routes (create-routes instance)]
    (handler/api db-routes)))

;;(defroutes vinculum-app
;;  (ANY "/foo/:name" [name] (parameter name)))
(def vinculum-app (create-http-server {:subprotocol "postgresql"
                                       :subname "//localhost/albin"
                                       :user "albin"
                                       :password "albin"}))

(def handler
  (-> vinculum-app
      wrap-params))
