// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    
    var jsonObj = { "id": "1", "name": "Innovation House", "floorPlanPicture": "http:\/\/is.gd\/qsAKnw", "lock": "0", "rooms": { "room": [{ "id": "1", "name": "Kitchen", "temperature": "22", "light": "0" }, { "id": "2", "name": "Living room", "temperature": "22", "light": "1" }] }, "consumption": { "consumption": [{ "id": "1", "power": "9", "water": "1", "naturalGas": "0.8" }, { "id": "2", "power": "9.9", "water": "0.9", "naturalGas": "0.79" }, { "id": "3", "power": "8.9", "water": "1.1", "naturalGas": "0.81" }, { "id": "4", "power": "10", "water": "1", "naturalGas": "0.82" }, { "id": "5", "power": "9.9", "water": "1", "naturalGas": "0.79" }, { "id": "6", "power": "10", "water": "1", "naturalGas": "0.78" }, { "id": "7", "power": "10", "water": "1", "naturalGas": "0.69" }] } };

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Room');
    data.addColumn('number', 'degrees in celcius');

    $.each(jsonObj.rooms.room, function (index, element) {
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


