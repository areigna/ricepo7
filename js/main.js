require.config({
    baseUrl: 'js',
    paths: {
        hbs: '../bower_components/require-handlebars-plugin/hbs',
        handlebars: '../bower_components/handlebars/handlebars.amd.min',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        text: '../bower_components/text/text',
        zeptojs: '../bower_components/zeptojs/src/zepto',
        lazy: '../bower_components/lazy.js/lazy'
    },
});

require(['util/func', 'util/router'], function(func, router) {

    var app = {
        initialize: function() {
            this.bindEvents();
        },
        bindEvents: function() {
            if(func.isPhonegap()) {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            }else{
                window.onload = this.onDeviceReady();
            }
        },
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
        },
        receivedEvent: function(event) {
            switch (event) {
                case 'deviceready':
                    app.initMainView();
                    break;
            }
        },
        initMainView:function(){
            //initilize the router
            router.init();
            //global config
            window.config = {
                host: 'http://ec2-174-129-160-38.compute-1.amazonaws.com:8080'
            }

            $$ = Dom7;

            window.ricepo = new Framework7({
		        onAjaxStart: function (xhr) {
		            ricepo.showIndicator();
		        },
		        onAjaxComplete: function (xhr) {
		            ricepo.hideIndicator();
		        }
            	/* pushState: false, popupCloseByOutside:false, animateNavBackIcon: true, modalTitle: i18n.global.modal_title, modalButtonOk: i18n.global.modal_button_ok, modalButtonCancel: i18n.global.cancel, preprocess:router.preprocess */
            });

            window.mainView = ricepo.addView('.view-main', {
                dynamicNavbar: true
            });
        }
    };

    app.initialize();

});
