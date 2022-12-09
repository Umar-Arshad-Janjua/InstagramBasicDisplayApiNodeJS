import React, {useState} from 'react';
import logo from '../images/idenbrid.jpg'
import {Link, useNavigate} from 'react-router-dom';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const history = useNavigate();
  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch("/signin", {
      
      method:"POST",
      headers:{
        "Content-Type": "application/json"
        
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
      
    })
    const data = res.json();
        if(res.status === 400 || !data){
            window.alert("invalid credentials");
            console.log("invalid credentials");
          }
            else{
              window.alert("success login");
              console.log("success login");
              history("/");
            }



  }

  return (
    <>
    <section  className='sign-in mt-0'>
          <div style={{'width':'70%', 'height':'auto'}}   className='container mt-3 bg-light rounded  shadow'>
              <div className='signin-content row mt-5 '>
              <div className=" col-md-5 mt-5 ms-3 mb-5" style={{'maxWidth':'100%', 'height':'auto'}}>
                    <img src={logo} alt="" className='ms-5 mt-5 mb-4' style={{'maxWidth':'70%', 'height':'auto'}} />
                    <br />
                    <Link to='/signup' className='ms-5 mt-5 text-decoration-none text-dark ' style={{'width':'100%'}}>  Register</Link>
                  </div>
                  <div className='signin-form col-6 ms-3 mt-5 mb-5'>
        
                        <h3 className='form-title mt-3' style={{'fontFamily': "sans-serif"}}>Sign in</h3>
                        <form method="POST" className='register-form' id='register-form'>
                      
                          <div class="form-group mb-1">
                            <label htmlFor="email"><i class= "zmdi  ms-2 zmdi-email"></i></label>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id='email' required={true} className="form-control border-none" autoComplete='off' placeholder="Enter email"/>
                        
                          </div>
                         
                      
                          <div class="form-group mb-1">
                            <label htmlFor="password"><i class= "zmdi  ms-2 zmdi-lock"></i></label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id='password' className="form-control border-none" required={true} autoComplete='off' placeholder="Enter password"/>
                        
                          </div>
                          
                         
                          
                          <div className="form-group form-button mt-3">
                          
                          <input onClick={loginUser} name="sign" id="sign" className='btn btn-primary' value='register'/>
                        </div>
                         
                          
              
                            </form>
                          
                    
                  </div>
                  
              </div>
          </div>
      </section>
    </>
  )
}

export default Login