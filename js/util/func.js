//miscellaneous functions go here
define(function(){
	var func = {
		isPhonegap: function(){
	        return (typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined');
		},
		play: function(src){
			var audio = document.createElement('audio');
			audio.setAttribute('src', src);
			audio.play();
		}
	};
	
	return func;
});