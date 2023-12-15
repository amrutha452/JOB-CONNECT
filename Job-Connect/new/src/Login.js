import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [auth ,setAuth]=useState(false)
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const changeHandler =e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    axios.post('http://localhost:4000/login',data).then(
      res=>{
        // console.log(res.data)
          localStorage.setItem('token',res.data.token);
          setAuth(true)
      }
    
    ) 
    
    

  }
    if(auth){
    return <Redirect to="/dashboard" />
  } 

  //another way (state auth place lo ee code use chesukovachu ) state use cheste delayy vundadhu 
  // if(localStorage.getItem('token')){
  //   return <Redirect to="/dashboard" />
  // }
  return (
    <div className='loginNav'>
      
      <nav className='navbar' >
        <h2>
            <Link style={{"textDecoration": "none",color:"#284a6e", "fontWeight": "700",
  "fontSize": "40px"}} to='/'><i className="fas fa-code"></i>Job-Connect</Link>
            </h2>
        <ul className='nav-ul'>
            <li ><Link style={{"textDecoration": "none",color:"#284a6e","fontWeight": "500",  "fontSize": "30px"}} to="/register">Register</Link></li>
            <li><Link style={{"textDecoration": "none",color:"#284a6e","fontWeight": "500",  "fontSize": "30px"}} to="/login">Login</Link></li>
        </ul>
      </nav>

      <section className='loginContainer' style={{"textAlign":"center"}}>
        <br/><br/><br/>
        <h1 className='loginText'>Sign in </h1><br/>
        <p className='lead'>Sign into your account</p><br/>
        <form className='form' onSubmit={submitHandler} autoComplete='off'>
            <div className='form-group'>
                <input type="email" placeholder='enter email' name="email" onChange={changeHandler} required/><br/><br/>

            </div>
            <div className='form-group'>
                <input type="password" placeholder='enter password' name="password" onChange={changeHandler} /><br/>
                
            </div>
            <br/>
            {/* <Link to="/login" className='btn btn-danger'>Login </Link><br/><br/> */}
            <input type="submit" className='btnstyle' value="Login"/>

        </form>
         <p  style={{fontSize:"20px"}}>
          <br/>
            Don't have an account? <Link to="/register" >Sign Up</Link>
         </p>

      </section>

    </div>
  )
}

export default Login;
