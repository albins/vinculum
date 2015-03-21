(ns vinculum.core
  (:require [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [compojure.core :refer [defroutes ANY routes]]
            [compojure.handler :as handler]
            [vinculum.database :as db]
            [liberator.representation :refer [ring-response render-map-generic]]
            [clojure.java.jdbc :as jdbc]))

(def accepted-types ["application/edn" "text/plain" "text/html"])

(defresource parameter [realm]
  :available-media-types ["text/plain"]
  :handle-ok (fn [_] (format "The text is %s" realm)))

(defn resource-exists [ctx rfn]
  (if-let [resource (rfn)] {::resource resource}
          false))


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
    (ANY ["/weight"] []
      (resource
        :allowed-methods [:get :put]
        :exists? (fn [ctx] (resource-exists
                            ctx
                            #(db/load-all :weight instance)))
        :available-media-types accepted-types
        ;;        :put! (fn [ctx] (db/put-data :weight instance id (read-body ctx) (read-metadata ctx)))
        :put! (fn [ctx]
                (let [new-weight (get-in ctx [:request :params])]
                          (db/put-data :weight instance new-weight)))
  ;;      :delete! (fn [_] (db/delete-document instance id (read-metadata _)))
        ;;:handle-ok (fn [_] (standard-response _ (::resource _)))
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
