
	function validateForm() {
	  var name = document.forms["myForm"]["name"].value;
	  var email = document.forms["myForm"]["email"].value;
	  var age = document.forms["myForm"]["age"].value;
	  var recommed = document.forms["myForm"]["recommed"].value;
	  var course = document.forms["myForm"]["course"].checked;
	  if (name == "") {
		alert("Please enter your name");
		return false;
	  }
	  if (email == "") {
		alert("Please enter your email");
		return false;
	  }
	  if (age == "") {
		alert("Please enter your age");
		return false;}

		if (recommed == "") {
		alert("Please select your Field");
		return false;
	  }

	  if (!course) {
		alert("Please Select at least one language");
		return false;
	  }
	  alert("Form Submitted Succesfully !");
	}