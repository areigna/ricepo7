define(["store/restStore", "view/restView"], function(restStore, restView) {

	var controller = {
		bindings : [
			{element: '', event: '', handler: this.handler }
		],

		init: function(query){
			restStore.load(query, function(data){
				restView.render(data);
			});
		},

		handler: function(){
		}
	};

	return controller;
});