define(['hbs!template/rest'], function(restTemplate) {


	var view = {
		render: function(rests) {
			$$('.page[data-page=rest] ul').html(restTemplate(rests));
			//bindEvents(params.bindings);
			//bindSaveEvent(params.doneCallback);
		},

		bindEvents: function(bindings) {
			for (var i in bindings) {
				$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
			}
		}
	};

	return view;
});