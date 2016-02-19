//namespace
var STGourmet = (function($){
	function init(){
		$(document).ready(function(){
			//submodules
			STGourmet.shoppingCart.displayStatus();
			STGourmet.welcomeMessage.showGreeting();
		});
	}
	return {init: init};
	
})(jQuery);
