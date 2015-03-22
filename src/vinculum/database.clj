(ns vinculum.database
  (:require [clojure.java.jdbc :as jdbc]
            [sqlingvo.core :as sql]
            [clojure.core.typed :as t]
            [sqlingvo.db :as db]
            [clojure.set :refer [rename-keys]]
            [clojure.core.match :refer [match]]))

(def db-type (db/postgresql))

(defn load-data
  "Load data in a given context from the database."
  [realm instance id]
  (match realm
         :weight (let [query (sql/sql (sql/select db-type [*]
                                                  (sql/from :lifelog.weight)
                                                  (sql/where `(= :weight_id ~id))))]
                   (map #(rename-keys % {:weight_id :id}) (jdbc/query instance query) ))
         :else "WHAT ARE YOU DOING!?"))

(defn load-all
  "Load all data from realm"
  [realm instance]
  (match realm
         :weight (let [query (sql/sql (sql/select db-type [*]
                                                  (sql/from :lifelog.weight)
                                                  (sql/order-by :date)))
                       result (jdbc/query instance query)]
                    (map #(rename-keys % {:weight_id :id}) result))
         :else "WHAT ARE YOU DOING!?"))

(defn put-data
  [realm instance data]
  (match realm
         :weight (if (contains? data "weight")
                   (let [date (:date data)
                         weight (data "weight")
                         statement (sql/sql (sql/insert db-type :lifelog.weight []
                                                        (sql/values {:weight weight})))]
                     (.println (System/out) statement)
                     (jdbc/with-db-connection [db-conn instance]
                       (jdbc/execute! db-conn statement)))
                   {:message "Error: invalid data format!"})
         :else "WHAT ARE YOU DOING!?"))
