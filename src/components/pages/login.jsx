import React, { useState, useEffect } from 'react';
import './login.css';
import $, { event } from 'jquery';
import axios from 'axios';
import Validation from './loginvalidation';

//npm install jquery

const LoginForm = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

    useEffect(() => {
        // Mimic document.ready behavior
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');

    }, []);

    const handleRadioChange = (e) => {
      const isChecked = e.target.id === 'log-login-show';
      setIsLoginFormVisible(!isChecked); // Reverse the logic here
  console.log(isChecked);
      const isChecked2 = e.target.id === 'log-reg-show';
      setIsLoginFormVisible(!isChecked); // Reverse the logic here
      
      if (isChecked || !isChecked2) {
          // If login is checked, show login panel and hide register panel
          $('.register-info-box').fadeOut();
          $('.login-info-box').fadeIn();
          $('.white-panel').addClass('right-log');
          $('.register-show').addClass('show-log-panel');
          $('.login-show').removeClass('show-log-panel');
          setIsLoginFormVisible(isLoginFormVisible); // Reverse the logic here

      } else if(!isChecked || isChecked2) {
          // If register is checked, show register panel and hide login panel
          $('.register-info-box').fadeIn();
          $('.login-info-box').fadeOut();
          $('.white-panel').removeClass('right-log');
          $('.login-show').addClass('show-log-panel');
          $('.register-show').removeClass('show-log-panel');
          
          setIsLoginFormVisible(isLoginFormVisible); // Reverse the logic here

      }
  };
  

  //register
  //   const [values_reg,setValues_reg]= useState({
  //     name : '',
  //     email : '',
  //     password : '',
  //     adresse : '',
  //     phone : ''
  //   })

  
  // const handleChange = (event)=>{
  //   setValues_reg({...values_reg , [event.target.name]:[event.target.value]})
  // }
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   axios.post('http://localhost:8881/register',values_reg)
  //   .then(res => console.log("Success"))
  //   .catch(err => console.log(err));
  // }




  // //login 
  //   const [values,setValues]= useState({
  //   email : '',
  //   password : ''
  // })

  // const[errors ,setErrors] = useState({

  // })
  // const handleInput_login =(event)=>{
  //   setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
  // }

  // // const navigate = useNavigate();

  // const handleSubmit_login =(event)=>{
  //   event.preventDefault();
  //   setErrors(Validation(values));
  //   if (errors.email === "" && errors.password === "") {
  //     axios.post('https://localhost:8081/login',values)
  //     .then(res => {
  //       if (res.data === "success") {
  //         navigate("../Home.jsx");
  //       }else{
  //         alert("no record ")
  //       }
  //     })
  //   }
  // }

  const [values_reg, setValues_reg] = useState({
      name: '',
      email: '',
      password: '',
      adresse: '',
      phone: ''
  });
  const [values, setValues] = useState({
      email: '',
      password: ''
  });
  const [errors, setErrors] = useState({});
  // const history = useHistory(); // Initialize useHistory

  useEffect(() => {
      // Mimic document.ready behavior
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
  }, []);


  const handleChange = (event) => {
      setValues_reg({ ...values_reg, [event.target.name]: event.target.value });
  };

  const handleInput_login = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit_login = (event) => {
      event.preventDefault();
      // const validationErrors = Validation(values);
      // setErrors(validationErrors);
      // if (!validationErrors.email && !validationErrors.password) {
          axios.post('http://localhost:8881/login', values)
              .then(res => {
                  if (res.data === "success") {
                    console.log("logoogogo")
                    // Redirect to the home page
window.location.href = 'http://localhost:5173/';

                      // history.push("/Home"); // Navigate to Home page
                  } else {
                      alert("no record ")
                  }
              })
      //         .catch(err => console.log(err));
      // }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8881/register', values_reg)
          .then(res => console.log("Success"))
          .catch(err => console.log(err));
  };
    return (
        <div className="login">
            <div className="login-reg-panel">
                <div className="login-info-box">
                    <h2>Have an account?</h2>
                    <p>Please login to access your account.</p>
                    <label id="label-register" htmlFor="log-reg-show">Login</label>
                    <input type="radio" name="active-log-panel" id="log-reg-show" checked={isLoginFormVisible} onChange={handleRadioChange}/>
                </div>

                <div className="register-info-box">
                    <h2>Don't have an account?</h2>
                    <p>Join us to explore amazing destinations!</p>
                    <label id="label-login" htmlFor="log-login-show">Register</label>
                    <input type="radio" name="active-log-panel" id="log-login-show" checked={isLoginFormVisible} onChange={handleRadioChange}/>
                </div>

                <div className="white-panel">
                    <div className={isLoginFormVisible ? "login-show" : "login-show right-log"}>
                        <h2>LOGIN</h2>
                          <form action="" onSubmit={handleSubmit_login}>
                        <input type="text" placeholder="Email" onChange={handleInput_login} name='email'/>
                        {errors.email && <span className='text-danger'>{ errors.email}</span>}
                        <input type="password" placeholder="Password"  onChange={handleInput_login} name='password'/>
                        {errors.password && <span className='text-danger'>{ errors.password}</span>} <br />
                        <input type="submit" value="Login" className='btn_login'/>
                        <a href="">Forgot password?</a>
                        </form>
                    </div>
                    <div className={!isLoginFormVisible ? "register-show" : "register-show right-log"}>
                        <h2>REGISTER</h2>
                        <form  onSubmit={handleSubmit} >
                        <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type="text" placeholder="Username" name="username"  onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password"  onChange={handleChange}/>
                        {/* <input type="text" placeholder="Adresse" name="adresse"  onChange={handleChange}/>
                        <input type="text" placeholder="Phone" name="phone"  onChange={handleChange}/> */}
                        <input type="submit" value="Register" className='btn_login'/> 
                  
                        </form>
                        <div className='google'>
                        <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                        <button type="button" class="btn btn-primary btn-floating mx-1 btn_gg" >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" class="btn btn-primary btn-floating mx-1 btn_gg">
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" class="btn btn-primary btn-floating mx-1 btn_gg">
                          <i class="fab fa-linkedin-in"></i>
                        </button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;







