var Calculator = (function() {
	var memory = 0;
	var isOperation = false;
	var operator = "";
	function Calculator() {}
	Calculator.prototype.writeDisplay = function(el){
		var input = document.getElementsByTagName('input')[0];
		var element = el.getAttribute('accesskey');
		switch (element) {
			case 'C':
				input.value = "0";
				break;
			case '0':
				input.value = checkValue(input.value, "0");
				break;
			case '1':
				input.value = checkValue(input.value, "1");
				break;
			case '2':
				input.value = checkValue(input.value, "2");
				break;
			case '3':
				input.value = checkValue(input.value, "3");
				break;
			case '4':
				input.value = checkValue(input.value, "4");
				break;
			case '5':
				input.value = checkValue(input.value, "5");
				break;
			case '6':
				input.value = checkValue(input.value, "6");
				break;
			case '7':
				input.value = checkValue(input.value, "7");
				break;
			case '8':
				input.value = checkValue(input.value, "8");
				break;
			case '9':
				input.value = checkValue(input.value, "9");
				break;
			case '+':
				memory = parseFloat(input.value);
				isOperation = true;
				operator = "+";
				break;
			case '-':
				memory = parseFloat(input.value);
				isOperation = true;
				operator = "-";
				break;
			case '*':
				memory = parseFloat(input.value);
				isOperation = true;
				operator = "*";
				break;
			case '/':
				memory = parseFloat(input.value);
				isOperation = true;
				operator = "/";
				break;
			case '=':
				var result = 0;
				var number = parseFloat(input.value);
				switch (operator) {
					case '+':
						result = parseFloat(memory + number);
						break;
					case '-':
						result = parseFloat(memory - number);
						break;
					case '*':
						result = parseFloat(memory * number);
						break;
					case '/':
						result = parseFloat(memory / number);
						break;
				}
				input.value = result;
				break;
				case '.':
					input.value = checkDot(input.value);
					break;
		}
	};

	function checkValue(previusValue, nextValue) {
		if(previusValue === "0") {
			return nextValue;
		}else if(isOperation) {
			isOperation = false;
			return nextValue;
		}else {
			return previusValue += nextValue;
		}
	}

	function checkDot(previusValue) {
		if(previusValue.indexOf(".") > -1) {
			return previusValue;
		}else {
			return previusValue += ".";
		}
	}

	return Calculator;
}());

var calc = new Calculator();