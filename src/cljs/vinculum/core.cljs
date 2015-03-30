(ns vinculum.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]))


(.load js/google "visualization" "1" (clj->js {:packages ["corechart"]}))

;; (defn add-rows []
;;    (js/google.visualization.arrayToDataTable
;;      (clj->js [["Date" "Weight"]
;;                [(js/Date. 2015 01 01) 8]
;;                [(js/Date. 2015 02 01) 13]
;;                [(js/Date. 2015 03 01) 24]])))


(defonce app-state (atom {:list []}))

(defn add-rows []
   (js/google.visualization.arrayToDataTable
     (clj->js (cons ["Date" "Weight"] (:list @app-state)))))

(defn chart-options []
  (clj->js {:title  "Weight"
            :width 1000
            :height 600
            :trendlines { :0 {:visibleInLegend false
                              :opacity 0.3}}}))

;; FIXME: ALL OF THIS IS WRONG
(defn get-chart []
  (js/google.visualization.LineChart. (.getElementById js/document "content" )))

(defn draw-chart []
  (let [data (add-rows)
      options (chart-options)
      chart (get-chart)]
    (.draw chart data options)))

(defn handler [response]
  (swap! app-state assoc :list (map #(list (:date %) (:weight %)) response)))

(GET "http://localhost:3000/weight" :handler handler :format :edn)

(defn main []
  (om/root
   (fn [data owner]
     (dom/h1 "Hello")
      (om/component
       (apply dom/ul nil
              (map (fn [text] (dom/li nil text)) (:list data)))))
    app-state
    {:target (. js/document (getElementById "app"))}))

(.setOnLoadCallback js/google draw-chart)
