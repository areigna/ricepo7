define(['hbs!template/food'], function(foodTemplate) {

	var view = {
		renderTitle : function(title){
			$$('.navbar-inner[data-page=food] div.center').text(title);
		},
		renderList : function(foods) {
			//foodlist update
			$$('.page[data-page=food] ul').html(foodTemplate(foods));
			//bindEvents(params.bindings);
			//bindSaveEvent(params.doneCallback);
			$$('.addFood').on('click',function(e){
				var id = e.target.getAttribute('data-food');
				require(['store/foodStore'], function(foodStore){
					console.log(foodStore.findById(id));
				});
			});
		},

		bindEvents : function(bindings) {
			for (var i in bindings) {
				$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
			}
		}
	};

	return view;
});