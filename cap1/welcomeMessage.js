STGourmet.welcomeMessage = (function() {
	function getStatus(){
		if(STGourmet.customer.isLoggedIn()){
			if(STGourmet.customer.isNew()){
				return "new";
			} else {
				return "existing";
			}
		} else {
			return "unknown";
		}
	}
	
	function getWelcomeMessage() {
		if(getStatus() !== "unknown" ) {
			if(getStatus() === "existing" ) {
				return "Hi again " + STGourmet.customer.getName()
				+ ", glad to see you back!";
			} else {
				return "Welcome "
				+ STGourmet.customer.getName()
				+ " - 25% off entire purchase!";
			}
		} else {
			return "Sign up for some great gourmet deals!";
		}
	}

	function showGreeting(){
		$("#content").html(getWelcomeMessage());
	}
	
	return {
		showGreeting : showGreeting
	};
})();