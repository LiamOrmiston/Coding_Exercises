function sayit (number) {
	var word = "";
	var numLength = number.toString().length;
	var myArr = [];
	myArr = (number).toString().split("").map(Number);
	if (number < 20) {
		word = num(number);
	}
	else if (number < 100) {
		word = (prefix(myArr[0]) + "-" + num(myArr[1]));
	}
	else if (number < 1000) {
		if (myArr[1] == 1) {
			var teen = ("" + myArr[1] + myArr[2]);
			teen = Number(teen);
			word = (num(myArr[0]) + "-hundred " + num(teen));
		}
		else {
			word = (num(myArr[0]) + "-hundred " + prefix(myArr[1]) + " " + num(myArr[2]));
		}
	}
	else {
		word = "comming soon!";
	}
	return word;
	function prefix (number) {
		var word = "";
		switch (number) {
			case 2:
				word = "twenty";
				break;
			case 3:
				word = "thirty";
				break;
			case 4:
				word = "fourty";
				break;
			case 5:
				word = "fifty";
				break;
			case 6:
				word = "sixty";
				break;
			case 7:
				word = "seventy";
				break;
			case 8:
				word = "eighty";
				break;
			case 9:
				word = "ninety";
				break;
		}
		return word;
	}
	function num (number) {
		var word = "";
		switch (number) {
			case 0:
				word = "";
				break;
			case 1:
				word = "one";
				break;
			case 2:
				word = "two";
				break;
			case 3:
				word = "three";
				break;
			case 4:
				word = "four";
				break;
			case 5:
				word = "five";
				break;
			case 6:
				word = "six";
				break;
			case 7:
				word = "seven";
				break;
			case 8:
				word = "eight";
				break;
			case 9:
				word = "nine";
				break;
			case 10:
				word = "ten";
				break;
			case 11:
				word = "eleven";
				break;
			case 12:
				word = "twelve";
				break;
			case 13:
				word = "thirteen";
				break;
			case 14:
				word = "fourteen";
				break;
			case 15:
				word = "fifteen";
				break;
			case 16:
				word = "sixteen";
				break;
			case 17:
				word = "seventeen";
				break;
			case 18:
				word = "eighteen";
				break;
			case 19:
				word = "nineteen";
				break;
			default:
				word = "hmmm I don't seem to know that number";
				break;
					  }
		return word;
	}
}
