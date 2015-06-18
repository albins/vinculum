(ns vinculum.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)


(.load js/google "visualization" "1" (clj->js {:packages ["corechart"]}))

(defonce app-state (atom {:weight {:div {:width "100%" :height 600}
                                   :data []}}))

(defn add-rows []
   (js/google.visualization.arrayToDataTable
     (clj->js (cons ["Date" "Weight"] (get-in @app-state [:weight :data])))))

(defn chart-options [width height]
  (clj->js {:title  ""
            :width width
            :height height
            :trendlines { :0 {:visibleInLegend false
                              :opacity 0.3}}}))

(defn- draw-line-chart [data div {:keys [id]}]
  (let [{:keys [width height]}    div
        chart (js/google.visualization.LineChart. (.getElementById js/document id))
        options (chart-options width height)
        draw-stats (js/google.visualization.arrayToDataTable
                    (clj->js (cons ["Date" "Weight"] data)))]
    (.draw chart draw-stats options)))

(defn get-div-dimensions
  "Get width and height of a div with a specified id."
  [id]
  (let [e (.getElementById js/document id)
        x (.-clientWidth e)
        y (.-clientHeight e)]
    {:width x :height y}))

(defn line-chart [cursor owner {:keys [id chart] :as opts}]
  (reify
    om/IWillMount
    (will-mount [_]
      ;; Add event listener that will update width & height when window is resized
      (.addEventListener js/window
                         "resize" (fn []
                                    (let [{:keys [width height]} (get-div-dimensions id)]
                                      (om/update! cursor :div {:width width :height height})))))
    om/IRender
    (render [_]
      (let [{:keys [width height]} (:div cursor)]
        (html
         [:div {:id id :width width :height height}])))
    om/IDidMount
    (did-mount [_]
      (when-let [data (seq (:data cursor))]
        (draw-line-chart data (:div cursor) opts)))
    om/IDidUpdate
    (did-update [_ _ _]
      (let [{:keys [width height]} (:div cursor)]
        (let [n (.getElementById js/document id)]
          (while (.hasChildNodes n)
            (.removeChild n (.-lastChild n))))
        (when-let [data (seq (:data cursor))]
          (draw-line-chart data (:div cursor) opts))))))

(defn fetch-data []
  (let [handler (fn [response]
                  (swap! app-state assoc-in [:weight :data]
                         (map #(list (:date %) (:weight %)) response)))
        error-handler (fn [{:keys [status status-text]}]
                        (print status status-text)
                        (swap! app-state assoc :error {:status status
                                                       :status-text status-text}))]
    (GET "/weight"
         :handler handler
         :format :edn
         :error-handler #(print "ERROR!"))))

(defn main []
  (fetch-data)
  (js/setInterval fetch-data 10000)
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
         (html
          [:div {:class "container"}
           [:h1 "Weight chart"]
           [:div {:id "chart"}]
           [:div {:id "error"}]
           (om/build line-chart (:weight app) {:opts {:id "chart"}})
           ]))))
   app-state {:target (. js/document (getElementById "app"))}))
