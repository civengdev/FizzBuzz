$(document).ready(function() {

	function playGame() {
	 for (var num = 1; num <= 100; num++) {
		if (num % 3 == 0 && num % 5 == 0) {
	      var fbNum = "fizzbuzz";
	    } else if (num % 3 == 0) {
	      var fbNum = "fizz";
	    } else if (num % 5 == 0) {
	      var fbNum = "buzz";
	    } else {
	      var fbNum = num;
	    }
	   console.log(fbNum);
	   document.write(fbNum+"<br/>");
	 }
}
$(document).on('click', '.start-button', function() {
	  /*alert('this works');*/
	  playGame();
});
});