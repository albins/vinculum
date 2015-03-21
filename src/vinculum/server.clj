(ns vinculum.server)

(defn -main []
  (with-open [instance (embedded/create :path "testdb")]
    (run-server
      (create-http-server instance)
      { :port (Integer/parseInt (or (System/getenv "PORT") "8080")) :join? true})
    (debug "Shutting down mofo")))
