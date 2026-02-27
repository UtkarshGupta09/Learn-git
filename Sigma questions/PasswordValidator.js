function passwordValidator(str) {
  //USEING REGEX
  let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,16}$/;
  if (pattern.test(str)) {
    console.log("strong");
  } else {
    console.log("weak");
  }
}
passwordValidator("Hello123_)456");

