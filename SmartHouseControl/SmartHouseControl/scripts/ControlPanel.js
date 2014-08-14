window.onload = function () {
    getHouseData();
};


function getHouseData() {

    /*$.ajax({
        type: "GET",
        url: "http://smarthouses.summerinnovationweek.dk/Api/getHouse.php?houseID=1",
        success: function (jsonObj) {*/
    var jsonDataObj = { "id": "1", "name": "Innovation House", "floorPlanPicture": "http:\/\/is.gd\/qsAKnw", "lock": "0", "rooms": { "room": [{ "id": "1", "name": "Kitchen", "temperature": "22", "light": "1" }, { "id": "2", "name": "Living room", "temperature": "22", "light": "1" }, { "id": "3", "name": "Dinning room", "temperature": "20", "light": "0" }, { "id": "4", "name": "Guest room", "temperature": "19", "light": "1" }, { "id": "5", "name": "Bath room", "temperature": "21", "light": "0" }, { "id": "6", "name": "Office", "temperature": "19", "light": "0" }] }, "consumption": { "consumption": [{ "id": "1", "power": "9", "water": "1", "naturalGas": "0.8", "date": "2014-08-13" }, { "id": "2", "power": "9.9", "water": "0.9", "naturalGas": "0.79", "date": "2014-08-14" }, { "id": "3", "power": "8.9", "water": "1.1", "naturalGas": "0.81", "date": "2014-08-15" }, { "id": "4", "power": "10", "water": "1", "naturalGas": "0.82", "date": "2014-08-16" }, { "id": "5", "power": "9.9", "water": "1", "naturalGas": "0.79", "date": "2014-08-17" }, { "id": "6", "power": "10", "water": "1", "naturalGas": "0.78", "date": "2014-08-18" }, { "id": "7", "power": "10", "water": "1", "naturalGas": "0.69", "date": "2014-08-19" }] } };
            //var jsonDataObj = $.parseJSON(jsonObj);

            $.each(jsonDataObj.rooms.room, function (index, room) {
                if (room.name == "Kitchen") {
                    if (room.light == 0)
                        $("#myKitchen").attr("src", "images/LightBulbOff.png");
                    else
                        $("#myKitchen").attr("src", "images/LightBulbOn.png");
                }
            });

       // }
    //});
};

function postTemperature(temp, id) {

    var temperatureData = {houseID:"1", roomID: id, temperature: temp }
    $.ajax({
        type: "POST",
        url: "http://smarthouses.summerinnovationweek.dk/Api/setTemperature.php",
        data: temperatureData,
        success: function (jsonObj) {
            var jsonDataObj = $.parseJSON(jsonObj);
            window.alert("SUCCES");
     }
    });
}