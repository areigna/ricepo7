//document.addEventListener("deviceready", onDeviceReady, false);
onDeviceReady();

function onDeviceReady() {
    // Initialize your app
    var ricepo = new Framework7({
        // Hide and show indicator during ajax requests
        onAjaxStart: function (xhr) {
            ricepo.showIndicator();
        },
        onAjaxComplete: function (xhr) {
            ricepo.hideIndicator();
        }
    });

    // Export selectors engine
    var $$ = Dom7;

    // Add view
    var mainView = ricepo.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true
    });

    $$("body").click(function(){
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    });
}

window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
    alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
