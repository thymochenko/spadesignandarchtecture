var cartActiveItems = [];

function getStatus(){
	if(cartActiveItems.length > 0){
		return "pending";
	}
	else{
		return "empty";
	}
}

function getStatusMessage(){
	if(getStatus() === "empty" ) {
		return "Cart is empty";
	} else {
		return "Cart (" + cartActiveItems.length + " items)";
	}
}

