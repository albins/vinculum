(ns vinculum.main
  (:require [vinculum.core :as core]))

(enable-console-print!)
(js/console.log "Starting production mode CLJS!")
(core/main)
