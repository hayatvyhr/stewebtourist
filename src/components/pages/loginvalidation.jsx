// function validation(values) {
//   alert("")
// let error = {}
// const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
// if(values.email === "") {
//  error.email = "Name should not be empty"
// }else if(email_pattern.test(values.email)) { 
// error.email = "Email Didn't match"
// }else {
// error.email = ""
// }

// if(values.password === "") { 
// error.password = "Password should not be empty" 
// } 
// else if(password_pattern.test(values.password)) { 
// error.password = "Password didn't match"
// } else { 
//   error.password = ""
// }
// }
// export default validation;
// loginvalidation.js
function validation(values) {
  let errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (values.password === "") {
    errors.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.";
  }

  return errors;
}

export default validation;
