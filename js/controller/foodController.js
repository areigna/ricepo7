define(["store/foodStore", "view/foodView", "store/restStore"], function(foodStore, foodView, restStore) {

	var bindings = [
		{element: '', event: '', handler: handler }
	];

	function init(query){
		//set global rest
		ricepo.rest = restStore.findById(query.rest_id);

		//render title
		foodView.renderTitle(ricepo.rest.chn_name);
		//load and render list
		foodStore.load(query, function(data){
			foodView.renderList(data);
		});
	}

	function handler(){

	}

	return {
		init: init
	};
});