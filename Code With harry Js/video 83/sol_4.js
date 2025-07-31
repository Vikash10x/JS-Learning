function isValidPassword(password) {
  const minlength = password.length >= 8;
  const hasUpperCase = /[A-z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigigt = /[0-9]/.test(password);

  return minlength && hasUpperCase && hasLowercase && hasDigigt;
}

console.log(isValidPassword("Hello123")); // true
console.log(isValidPassword("short1")); // too short
console.log(isValidPassword("hello12")); // no upper case
console.log(isValidPassword("HELLO123")); // no lower case
console.log(isValidPassword("HelloWorld")); // no digit
