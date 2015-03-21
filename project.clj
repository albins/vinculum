(defproject vinculum "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :plugins [[lein-ring "0.8.11"]
            [ragtime/ragtime.lein "0.3.8"]
            [lein-typed "0.3.5"]]
  :main vinculum.core
  :ring {:handler vinculum.core/handler}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :ragtime {:migrations ragtime.sql.files/migrations
            :database "jdbc:postgresql://localhost/albin?user=albin?pass=brok"
            }
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.typed "0.2.84"]
                 [liberator "0.12.2"] ;; API generation
                 [compojure "1.1.3"] ;; Routing
                 [sqlingvo "0.7.9"] ;; PostgreSQL -- see https://github.com/r0man/sqlingvo
                 [ragtime "0.3.8"] ;; database migrations -- see https://github.com/weavejester/ragtime/wiki/Getting-Started
                 [org.clojure/java.jdbc "0.3.6"] ;; SQL -- see https://github.com/clojure/java.jdbc
                 [postgresql/postgresql "8.4-702.jdbc4"]
                 [ring/ring-core "1.2.1"]
                 [org.clojure/core.match "0.3.0-alpha4"]]) ;; Web
