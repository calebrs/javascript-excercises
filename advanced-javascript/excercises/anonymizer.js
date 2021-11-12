//using OLOO create an account prototype that anonymizes user objects on init.

let Account = (function() {
  //declare private variables that will be accessible from the clouser of the newly created object
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonomyze() {
    let result = '';
    for (let char = 1; char <= 16; char += 1) {
      result += getRandonChar();
    }

    return result;
  }

  function isValidPassword(password) {
    return password === userPassword;
  }

  function getRandonChar() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890' //62
    let randomIndex = Math.floor(Math.random() * 62);
    return CHARS[randomIndex];
  }


  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonomyze();

      return this;
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonomyze();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(password, newPassword) {
      if (isValidPassword(password)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    displayName() {

    }
  }
  
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false