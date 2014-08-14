// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {

    $.ajax({
        type: "GET",
        url: "http://smarthouses.local:8888/api/getUserAnalytics.php?userID=1",
        success: function (jsonObj) {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', 'kilograms');

            $.each(jsonObj.userData, function (index, element) {
                data.addRows([
                    [element.date, parseFloat(element.weight)]]);
            });
            // Set chart options
            var options = {
                'title': '',
                'height': 300,
                vAxis: { title: "Weight in kilograms", titleTextStyle: { color: 'green' } },
                hAxis: { title: "Week", titleTextStyle: { color: 'red' } }
            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.ColumnChart(document.getElementById('weight_bar_chart'));
            chart.draw(data, options);
        }
    });
}
