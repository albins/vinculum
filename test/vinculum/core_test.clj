(ns vinculum.core-test
  (:require [clojure.test :refer :all]
            [vinculum.core :refer :all]))

(defn request [resource web-app & params]
   (vinculum-app {:request-method :get :uri resource :params (first params)}))

(deftest test-routes
   (is (= 200 (:status (request "/foo" vinculum-app))))
   (is (= "HELLO"
          (:body (request "/foo" vinculum-app))))
   (is (= 200 (:status (request "/foo" vinculum-app {:name "Ali"})))))
