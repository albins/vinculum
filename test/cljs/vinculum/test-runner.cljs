(ns vinculum.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [vinculum.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'vinculum.core-test))
    0
    1))
