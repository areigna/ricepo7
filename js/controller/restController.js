define(["store/restStore", "view/restView"], function(restStore, restView) {

	var bindings = [
		{element: '', event: '', handler: handler }
	];

	function init(query){
		restStore.load(function(rests){
			restView.render(rests);
		});
	}

	function handler(){

	}

	return {
		init: init
	};
});