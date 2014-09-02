define(['model/restModel','lodash'], function(restModel, _){
	var model = {
		url : config.host + '/getRestsByCity',
		store: [],
		load: function(query, callback){
			var self = this;
	        ricepo.showIndicator();
			$$.getJSON(this.url, query, function(data){
		        ricepo.hideIndicator();
				self.store= data.Items;
				callback(self.store);
			});
		},
		findById : function(id){
			return _.find(this.store, {rest_id: id});
		}	
	};
	return model;
});