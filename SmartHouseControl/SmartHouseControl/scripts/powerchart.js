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
        url: "http://smarthouses.summerinnovationweek.dk/Api/getHouse.php?houseID=1",
        success: function(jsonObj) {
            
            var jsonDataObj = $.parseJSON(jsonObj);

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', 'kWh used');
            data.addColumn('number', 'm3 water used');
            data.addColumn('number', 'm3 gas used');

            $.each(jsonDataObj.consumption.consumption, function(index, element) {
                data.addRows([
                    [element.date, parseFloat(element.power), parseFloat(element.water), parseFloat(element.naturalGas)]
                ]);
            });

            // Set chart options
            var options = {
                'title': 'This week consumption for the household',
                'height': 300,
                hAxis: { title: "Week", titleTextStyle: { color: 'red' } }
            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.ColumnChart(document.getElementById('power_bar_chart'));
            chart.draw(data, options);
        }
    });
}