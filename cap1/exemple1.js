

//modelo 1
var numberModule = (function (){
	//private var
	var num1 = 2;
	//private method
	function addNumbersInternally(num2){
		return num1 + num2;
	}
	
	return { addTwoNumbers : function (num2){
			console.log(addNumbersInternally(num2));
		}
	};
})();

//executando módulo público
numberModule.addTwoNumbers(2);

//modelo 2 revealing 
var numberModuleRevealing = (function (){
	var num1 = 2;
	//private method
	function addTwoNumbers(num2){
		return console.log(num1 + num2);
	}
	return {
		addTwoNumbers: addTwoNumbers
	};
})();

numberModuleRevealing.addTwoNumbers(2);

