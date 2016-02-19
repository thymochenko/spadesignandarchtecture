STGourmet.shoppingCart = (function(){
	var cartActiveItems = [];
	function getStatus(){
		if(cartActiveItems.length > 0){
			return "pedding";
		}
		else{
			return "empty";
		}
	}
	
	function getStatusMessage(){
		if(STGourmet.customer.isLoggedIn() && getStatus === "empty"){
			return "Cart Is Empty";
		}
		else{
			return "Cart (" + cartActiveItems.length + " items)";
		}
	}
	
	function displayStatus(){
		$("#cart").html(getStatusMessage());
	}
	
	return {
		displayStatus : displayStatus
	};
	
})();