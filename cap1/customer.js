STGourmet.customer = (function (){
	var customerLoggedIn = true;
	var customerName = "Emmit";
	var isNewCustomer = false;
	
	function isLoggedIn(){
		return customerLoggedIn;
	}
	
	function getName(){
		return customerName;
	}
	
	function isNew(){
		return isNewCustomer;
	}
	
	return { 
		isLoggedIn : isLoggedIn,
		getName : getName,
		isNew : isNew
	};
	
})();