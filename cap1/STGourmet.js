//namespace
var STGourmet = (function($){
	function init(){
		$(document). ready(function(){
			//submodules
			STGourmet.shoppingCart.displayStatus();
			STGourmet.welcomeMessage.showGretting();
		});
	}
	return {init: init};
	
})(JQuery);