window.onload = function () {
    getHouseData();
};


function getHouseData() {

    $.ajax({
        type: "GET",
        url: "http://smarthouses.summerinnovationweek.dk/Api/getHouse.php?houseID=1",
        success: function (jsonObj) {
            var jsonDataObj = $.parseJSON(jsonObj);
            
            if (jsonDataObj.lock == 0)
                $("#myFloorPlan").attr("src", "images/floorPlanRed.jpg");
            else
                $("#myFloorPlan").attr("src", "images/floorPlanGreen.jpg");

            $.each(jsonDataObj.rooms.room, function (index, room)
            {
                if (room.name == "Kitchen")
                {
                    if (room.light == 0)
                        $("#myKitchen").attr("src", "images/LightBulbOff.png");
                    else
                        $("#myKitchen").attr("src", "images/LightBulbOn.png");

                    $("#qtykitchen").attr("value", room.temperature);

                }
                else if (room.name == "Living room")
                {
                    if (room.light == 0)
                        $("#myLivingRoom").attr("src", "images/LightBulbOff.png");
                    else
                        $("#myLivingRoom").attr("src", "images/LightBulbOn.png");
                    
                    $("#qtylivingroom").attr("value", room.temperature);
                }
                else if (room.name == "Dinning room") {
                    if (room.light == 0)
                        $("#myDiningRoom").attr("src", "images/LightBulbOff.png");
                    else
                        $("#myDiningRoom").attr("src", "images/LightBulbOn.png");
                    
                    $("#qtydinningroom").attr("value", room.temperature);
                }
                else if (room.name == "Guest room") {
                    if (room.light == 0)
                        $("#myGuestRoom").attr("src", "images/LightBulbOff.png");
                    else
                        $("#myGuestRoom").attr("src", "images/LightBulbOn.png");

                    $("#qtyguestroom").attr("value", room.temperature);
                }
            });

        }
    });
};

function postTemperature(temp, id) {

    var temperatureData = {houseID:"1", roomID: id, temperature: temp }
    $.ajax({
        type: "POST",
        url: "http://smarthouses.summerinnovationweek.dk/Api/postTemperature.php",
        data: temperatureData,
        success: function (jsonObj) {
            
     }
    });
}

function postLockValue(lockVal) {
    var lock = { houseID: "1", lockValue: lockVal }
    $.ajax({
        type: "POST",
        url: "http://smarthouses.summerinnovationweek.dk/Api/postLockValue.php",
        data: lock,
        success: function (jsonObj) {
          
        }
    });
}

function postLightValue(id, value){
    var lightValue = { houseID: "1", roomID: id, lightValue: value}
    $.ajax({
        type: "POST",
        url: "http://smarthouses.summerinnovationweek.dk/Api/postLightValue.php",
        data: lightValue,
        success: function (jsonObj) {
          
        }
    });
}


