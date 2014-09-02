define(['model/foodModel','lodash'], function(foodModel, _){
	var model = {
		url : config.host + '/getFoodsByRest',
		store : [],

		load : function(query, callback){
			//spinning
			ricepo.showIndicator();

			$$.getJSON(this.url, query, function(data){
				ricepo.hideIndicator();
				this.store = data.Items;
				callback(this.store);
			});
		},
		findById: function(id){
			return _.find(this.store, {food_id: id});
		}
	};
	return model;
});