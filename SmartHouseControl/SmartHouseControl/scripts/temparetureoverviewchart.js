// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Room');
    data.addColumn('number', 'degrees in celcius');
    data.addRows([
      ['kitchen', 23],
      ['bedroom', 22],
      ['office', 23],
      ['livingroom', 20],
      ['room 1', 22],
      ['room 2', 22],
      ['toilet', 25]
    ]);

    // Set chart options
    var options = {
        'title': 'average temperature of every room',
        'height': 300,
        vAxis: { title: "temperature", titleTextStyle: { color: 'green' } },
        hAxis: { title: "Rooms", titleTextStyle: { color: 'red' } }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('temperature_bar_chart'));
    chart.draw(data, options);
}
