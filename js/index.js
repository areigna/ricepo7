var ricepo, $$, mainView;
document.addEventListener("deviceready", onDeviceReady, false);
//onDeviceReady();

function onDeviceReady() {
    // Initialize your app
    ricepo = new Framework7({
        // Hide and show indicator during ajax requests
        onAjaxStart: function (xhr) {
            ricepo.showIndicator();
        },
        onAjaxComplete: function (xhr) {
            ricepo.hideIndicator();
        }
    });

    // Export selectors engine
    $$ = Dom7;

    // Add view
    mainView = ricepo.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true
    });

}

