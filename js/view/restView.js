define(['hbs!template/rest'], function(restTemplate) {

	var el = $$('.page[data-page=rest]');

	function render(rests) {
		var html = restTemplate(rests);
		el.html(html);
		//bindEvents(params.bindings);
		//bindSaveEvent(params.doneCallback);
	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	};
});