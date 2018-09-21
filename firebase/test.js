$(document).ready(function () {
 


    var config = {
        apiKey: "AIzaSyCuQbQqd_cEpl-3o21gRt2uLCXLr3wAWNc",
        authDomain: "staysafe-cdbd9.firebaseapp.com",
        databaseURL: "https://staysafe-cdbd9.firebaseio.com",
        projectId: "staysafe-cdbd9",
        storageBucket: "staysafe-cdbd9.appspot.com",
        messagingSenderId: "1045504199821"
    };
    firebase.initializeApp(config);


    var database = firebase.database();

    //variables de las calles

    var juncoDeLaVega = 0;
    var danJuncoDeLaVega = 0;
    var newDanJuncoDeLaVega = 0;
    var luisElizondo = 0;
    var danLuisElizondo = 0;
    var newDanLuisElizondo = 0;
    var garciaRoel = 0;
    var danGarciaRoel = 0;
    var newDanGarciaRoel = 0;
    var avenidaDelEstado = 0;
    var danAvenidaDelEstado = 0;
    var newDanAvenidaDelEstado = 0;



    database.ref("/dangerLevel/juncoDeLaVega").on("value", function (snapshot) {
        danJuncoDeLaVega = snapshot.val().juncoDeLaVega;
        danJuncoDeLaVega = parseInt(danJuncoDeLaVega);
        $("#pJuncoDeLaVega").text(snapshot.val().juncoDeLaVega);
        $("#pJuncoDeLaVega").text("Current danger level: " + danJuncoDeLaVega);
        $("#mapJuncoDeLaVega").text(snapshot.val().juncoDeLaVega);
        $("#mapJuncoDeLaVega").text("Current danger level: " + danJuncoDeLaVega);

    });

    $("#bJuncoDeLaVega").click(function () {
        var newJuncoDeLaVega = $("#vJuncoDeLaVega").val().trim();
        newJuncoDeLaVega = parseInt(newJuncoDeLaVega);
        if (newJuncoDeLaVega < 11) {
            var newDanJuncoDeLaVega = (danJuncoDeLaVega + newJuncoDeLaVega) /2;
            console.log(newDanJuncoDeLaVega);
            database.ref("/dangerLevel/juncoDeLaVega").set({
                juncoDeLaVega: newDanJuncoDeLaVega
            });
        }
        $("#pJuncoDeLaVega").text("Current danger level: " + newDanJuncoDeLaVega);

    }); // end of street

    database.ref("/dangerLevel/luisElizondo").on("value", function (snapshot) {
        danLuisElizondo = snapshot.val().luisElizondo;
        danLuisElizondo = parseInt(danLuisElizondo);
        $("#pLuisElizondo").text(snapshot.val().luisElizondo);
        $("#pLuisElizondo").text("Current danger level: " + danLuisElizondo);
    });

    $("#bLuisElizondo").click(function () {
        var newLuisElizondo = $("#vLuisElizondo").val().trim();
        newLuisElizondo = parseInt(newLuisElizondo);
        if (newLuisElizondo < 11) {
            var newDanLuisElizondo = (danLuisElizondo + newLuisElizondo) / 2;
            database.ref("/dangerLevel/luisElizondo").set({
                luisElizondo: newDanLuisElizondo
            });
        }
        $("#pLuisElizondo").text("Current danger level: " + newDanLuisElizondo);

    }); // end of street

    database.ref("/dangerLevel/garciaRoel").on("value", function (snapshot) {
        danGarciaRoel = snapshot.val().garciaRoel;
        danGarciaRoel = parseInt(danGarciaRoel);
        $("#pGarciaRoel").text(snapshot.val().garciaRoel);
        $("#pGarciaRoel").text("Current danger level: " + danGarciaRoel);

    });

    $("#bGarciaRoel").click(function () {
        var newGarciaRoel = $("#vGarciaRoel").val().trim();
        newGarciaRoel = parseInt(newGarciaRoel);
        if (newGarciaRoel < 11) {
            var newDanGarciaRoel = (danGarciaRoel + newGarciaRoel) / 2;
            database.ref("/dangerLevel/garciaRoel").set({
                garciaRoel: newDanGarciaRoel
            });
        }
        $("#pGarciaRoel").text("Current danger level: " + newDanGarciaRoel);

    }); // end of street

    database.ref("/dangerLevel/avenidaDelEstado").on("value", function (snapshot) {
        danAvenidaDelEstado = snapshot.val().avenidaDelEstado;
        avenidaDelEstado = parseInt(avenidaDelEstado);
        $("#pAvenidaDelEstado").text(snapshot.val().avenidaDelEstado);
        $("#pAvenidaDelEstado").text("Current danger level: " + danAvenidaDelEstado);

    });

    $("#bAvenidaDelEstado").click(function () {
        var newAvenidaDelEstado = $("#vAvenidaDelEstado").val().trim();
        newAvenidaDelEstado = parseInt(newAvenidaDelEstado);
        if (newAvenidaDelEstado < 11) {
            var newDanAvenidaDelEstado = (danAvenidaDelEstado + newAvenidaDelEstado) / 2;
            database.ref("/dangerLevel/avenidaDelEstado").set({
                avenidaDelEstado: newDanAvenidaDelEstado
            });
        }
        $("#pGarciaRoel").text("Current danger level: " + newDanGarciaRoel);

    }); // end of street
    $("document").load(function () {

        $("#pJuncoDeLaVega").text("El nivel de peligrosidad es: " + newDanJuncoDeLaVega);

    $("#pLuisElizondo").text("Current danger level: " + newDanLuisElizondo);



    }); 
});