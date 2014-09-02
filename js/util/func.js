//miscellaneous functions go here
define(function(){
	function isPhonegap(){
        return (typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined');
	};
	
	return {
		isPhonegap: isPhonegap
	}
});