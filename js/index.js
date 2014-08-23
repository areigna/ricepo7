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

