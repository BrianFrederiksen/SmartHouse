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
        success: function (jsonObj) {

            var jsonDataObj = $.parseJSON(jsonObj);
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Room');
            data.addColumn('number', 'degrees in celcius');

            $.each(jsonDataObj.rooms.room, function (index, element) {
                data.addRows([
                    [element.name, parseInt(element.temperature)]]);
            });

            // Set chart options
            var options = {
                'title': 'Average temperature of every room',
                'height': 300,
                vAxis: { title: "temperature", titleTextStyle: { color: 'green' } },
                hAxis: { title: "Rooms", titleTextStyle: { color: 'red' } }
            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.ColumnChart(document.getElementById('temperature_bar_chart'));
            chart.draw(data, options);
        }
    });
}


