define(["store/restStore", "view/restView"], function(restStore, restView) {

	var bindings = [
		{element: '', event: '', handler: handler }
	];

	function init(query){
		restStore.load(query, function(data){
			restView.render(data);
		});
	}

	function handler(){

	}

	return {
		init: init
	};
});