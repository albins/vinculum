(ns vinculum.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]))


(defonce app-state (atom {:list []}))

(defn handler [response]
  (swap! app-state assoc :list (map #(list (:date %) (:weight %)) response)))

(GET "http://localhost:3000/weight" :handler handler :format :edn)

(defn main []
  (om/root
    (fn [data owner]
      (om/component
       (apply dom/ul nil
              (map (fn [text] (dom/li nil text)) (:list data)))))
    app-state
    {:target (. js/document (getElementById "app"))}))
