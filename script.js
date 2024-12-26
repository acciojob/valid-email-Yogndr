function validEmail(str) {
	const regex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
    return regex.test(str);
  //your JS code here.
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
alert(validEmail(str));
