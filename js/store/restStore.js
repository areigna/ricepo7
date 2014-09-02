define(['model/restModel'], function(restModel){
	var url = config.host + '/getRestsByCity';
	var store = [];

	function load(callback){
		$$.getJSON(url, function(data){
			store = data.Items;
			callback(store);
		});
	}
	return {
		load: load
	};
});