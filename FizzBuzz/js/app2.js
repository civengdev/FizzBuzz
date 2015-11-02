$(document).ready(function() {


	 for (var num = 1; num < 100; num++) {
	 	
		if (num % 3 == 0 && num % 5 == 0) {
	      num = "fizzbuzz";
	    } else if (num % 3 == 0) {
	      num = "fizz";
	    } else if (num % 5 == 0) {
	      num = "buzz";
	    } else {
	      num = num;
	    }
	   console.log(num);
	   /*numArray.push(num);
	   numArray.toString();*/
	 }
});