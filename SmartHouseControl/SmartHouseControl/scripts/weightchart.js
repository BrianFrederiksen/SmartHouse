// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {

    var jsonObj = { "userData": [{ "id": "1", "hoursOfSleep": "6", "weight": "70", "date": "2014-08-12T07:30:00" }, { "id": "2", "hoursOfSleep": "6.5", "weight": "72", "date": "2014-08-13T07:32:00" }] };
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
