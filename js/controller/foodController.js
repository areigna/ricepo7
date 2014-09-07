define(["store/foodStore", "view/foodView", "store/restStore"], function(foodStore, foodView, restStore) {

	var controller = {
		bindings : [
			{element: '', event: '', handler: this.handler }
		],

		init: function(query){
			//set global rest
			ricepo.rest = restStore.findById(query.rest_id);

			//render title
			foodView.renderTitle(ricepo.rest.chn_name);
			//load and render list
			foodStore.load(query, function(data){
				foodView.renderList(data);
				require(['util/func'],function(func){func.play('laugh.mp3')});
			});
		},

		handler: function(){
		}
	};

	return controller;
});