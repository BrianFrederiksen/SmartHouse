// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.


function drawChart() {

    //fetch jsonObj by using specific ID and API functionality
    $.ajax({
        type: "GET",
        url: "http://smarthouses.local:8888/api/getUserAnalytics.php?userID=1",
        success: function(jsonObj) {
        
         
        //creating table    
        var data = new google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', 'Hours of sleep');
            $.each(jsonObj.userData, function (index, element) {
                data.addRows([
                    [element.date, parseFloat(element.hoursOfSleep)]]);
            });
            // Set chart options
            var options = {
                'title': 'How much sleep did you have a day?',
                'height': 300,
                vAxis: { title: "Sleep / hour", titleTextStyle: { color: 'green' } },
                hAxis: { title: "Week", titleTextStyle: { color: 'red' } }
            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.ColumnChart(document.getElementById('sleep_bar_chart'));
            chart.draw(data, options);
        }
    });

    // Create the data table.
    

}
