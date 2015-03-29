(defproject vinculum "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :plugins [
;;            [lein-ring "0.8.11"]
            [lein-cljsbuild "1.0.3"]
            [lein-environ "1.0.0"]
;;            [ragtime/ragtime.lein "0.3.8"]
;;            [lein-typed "0.3.5"]
            ]
;;  :main vinculum.server
;;  :ring {:handler vinculum.core/handler}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :repl-options {:timeout 200000} ;; Defaults to 30000 (30 seconds)
  :test-paths ["spec/clj"]
  :ragtime {:migrations ragtime.sql.files/migrations
            :database "jdbc:postgresql://localhost/albin?user=albin?pass=brok"
            }
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2511" :scope "provided"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.3"]
                 [compojure "1.3.1"] ;; Routing
                 [enlive "1.1.5"]
                 [cljs-ajax "0.3.10"]
                 [om "0.8.0-rc1"]
;;                 [org.clojure/core.typed "0.2.84"]
                 [environ "1.0.0"]
                 [ring-cors "0.1.6"]
                 [liberator "0.12.2"] ;; API generation
                 [sqlingvo "0.7.9"] ;; PostgreSQL -- see https://github.com/r0man/sqlingvo
                 [ragtime "0.3.8"] ;; database migrations -- see https://github.com/weavejester/ragtime/wiki/Getting-Started
                 [org.clojure/java.jdbc "0.3.6"] ;; SQL -- see https://github.com/clojure/java.jdbc
                 [postgresql/postgresql "8.4-702.jdbc4"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/core.match "0.3.0-alpha4"]]

    :min-lein-version "2.5.0"
    :uberjar-name "vinculum.jar"
    :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                               :compiler {:output-to     "resources/public/js/app.js"
                                          :output-dir    "resources/public/js/out"
                                          :source-map    "resources/public/js/out.js.map"
                                          :preamble      ["react/react.min.js"]
                                          :optimizations :none
                                          :pretty-print  true}}}}
    :profiles {:dev {:source-paths ["env/dev/clj"]
                     :test-paths ["test/clj"]

                     :dependencies [[figwheel "0.2.1-SNAPSHOT"]
                                    [figwheel-sidecar "0.2.1-SNAPSHOT"]
                                    [com.cemerick/piggieback "0.1.3"]
                                    [weasel "0.4.2"]]

                     :repl-options {:init-ns vinculum.server
                                    :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                     :plugins [[lein-figwheel "0.2.1-SNAPSHOT"]]

                     :figwheel {:http-server-root "public"
                                :server-port 3449
                                :css-dirs ["resources/public/css"]}

                     :env {:is-dev true}

                     :cljsbuild {:test-commands { "test" ["phantomjs" "env/test/js/unit-test.js" "env/test/unit-test.html"] }
                                 :builds {:app {:source-paths ["env/dev/cljs"]}
                                          :test {:source-paths ["src/cljs" "test/cljs"]
                                                 :compiler {:output-to     "resources/public/js/app_test.js"
                                                            :output-dir    "resources/public/js/test"
                                                            :source-map    "resources/public/js/test.js.map"
                                                            :preamble      ["react/react.min.js"]
                                                            :optimizations :whitespace
                                                            :pretty-print  false}}}}
                     }

               :uberjar {:source-paths ["env/prod/clj"]
                         :hooks [leiningen.cljsbuild]
                         :env {:production true}
                         :omit-source true
                         :aot :all
                         :cljsbuild {:builds {:app
                                              {:source-paths ["env/prod/cljs"]
                                               :compiler
                                               {:optimizations :advanced
                                                :pretty-print false}}}}}})
