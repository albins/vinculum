(ns vinculum.weight)

;;   google.load('visualization', '1', {packages: ['corechart']});
;;     google.setOnLoadCallback(drawChart);

;;     function drawChart() {
;; /*
;;       var data = new google.visualization.DataTable();

;;       data.addColumn('date', 'X');
;;       data.addColumn('number', 'Dogs');
;;       data.addColumn('number', 'Cats');

;;       data.addRows([[new Date('2015-01-01'), 2, 3],
;;                     [new Date('2015-01-02'), 6, 9],
;;                     [new Date('2015-01-03'), 2, 19]]);
;;         */
;;     var data = google.visualization.arrayToDataTable([
;;         ['Number', 'Age'],
;;         [new Date('2015-01-01'), 8],
;;         [new Date('2015-01-02'), 13],
;;         [new Date('2015-01-19'), 23]]);

;;       var options = {
;;         width: 1000,
;;         height: 563,
;;         hAxis: {
;;           title: 'Time'
;;         },
;;         vAxis: {
;;           title: 'Popularity'
;;         },
;;         colors: ['#AB0D06', '#007329'],
;;         trendlines: { 0: {visibleInLegend: true}}
;;       };

;;       var chart = new google.visualization.LineChart(document.getElementById('ex7'));

;;       chart.draw(data, options);

;
