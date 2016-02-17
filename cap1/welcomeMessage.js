var customerLoggedIn = true;
var customerName = "Emmit"; 
var isNewCustomer = false;

function getStatus(){
	if(customerLoggedIn){
		if(isNewCustomer){
			return "new";
		}
		else {
			return "existing";
		}
	}
	else{
		return "unknown";
	}
}

function getWelcomeMessage(){
	if(getStatus !== "unknown"){
		if(getStatus == "existing"){
			return "Ola nomavente" + customerName + "parabens por voltar";
		}
		else{
			return "Bem vindo" + customerName + "25% em qualquer compra";
		}
	}
	else{
		return "Faça login para saber os detalhes de compra";
	}
}
