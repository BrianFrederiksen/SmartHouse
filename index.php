<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">


<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1265.21">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
  </style>
</head>
<body>
<?php include 'Api/ServerConnection.php';

$houseid = 1;
$roomid = 1;
$light = 123;
$temperature = 12;
$doorValue = 0;

?>

<h1 class="head"> </h1>

<script src="./jquery-1.11.0.js"></script>

<script type="text/javascript">
	
	// $.ajax({
 //        type: "GET",
 //        url: "http://smarthouses.local:8888/api/getHouse.php?houseID=1",
 //        success: function (returnvalue) {
 //        	$(".head").text(returnvalue);
 //        }
 //    });

	// var vdata = "houseID=1&roomID=1&lightValue0";
	// var vdata = {houseID:"1", roomID:"1", lightValue:"12312"};

 //    $.ajax({
 //        type: "POST",
 //        url: "http://smarthouses.local:8888/api/postLightValue.php",
 //        data: vdata, 
 //        success: function () {
 //        	$(".head").text("Cool it worked");
 //        }
 //    });

	var vdata = {houseID:"1", lockValue:"0"};

    $.ajax({
        type: "POST",
        url: "http://smarthouses.local:8888/api/postLockValue.php",
        data: vdata, 
        success: function () {
        	$(".head").text("Cool it worked");
        }
    });



</script>


</body>
</html>
