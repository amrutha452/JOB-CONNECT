
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link,useHistory,Redirect} from 'react-router-dom';

import axios from 'axios';
const Register = () => {
      const history=useHistory()

      const [data,setData]=useState({
        name:'',
        email:'',
        mobile:'',
        skill:'',
        password:'',
        confirmpassword:'',
      });
  
    
      


     
      const changeHandler =e=>{
        setData({...data,[e.target.name]:e.target.value})
      }
      const submitHandler=e=>{
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:4000/register',data,{
          headers:{
            'x-token':localStorage.getItem('token')
          }
        }).then(res=> alert(res.data))

  }
   
    // if(!localStorage.getItem('token')){
    //   return <Redirect to="/login" />
    // }
    
  
  return (
    <div className='registerNav'>
      
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

      <section className='logincontainer' style={{"height":"88.5vh","marginLeft":"65%"}}>
        <br/>
        <h1 className='loginText'>&nbsp;&nbsp;&nbsp;Sign up </h1><br/>
  
        <form className='form' onSubmit={submitHandler} autoComplete='off'>
            <div className='form-group'>
                <input type="text" placeholder='enter name' name="name"  onChange={changeHandler} required/><br/>

            </div><br/>
            <div className='form-group'>
                <input type="email" placeholder='enter email' name="email" onChange={changeHandler}  required/><br/>

            </div><br/>
            <div className='form-group'>
                <input type="text" placeholder='mobile' name="mobile" onChange={changeHandler}  /><br/>
                
            </div><br/>
    
            <div className='form-group'>
                <input type="text" placeholder='skill,skill,skill' name="skill" onChange={changeHandler}  /><br/>
                {/* <small className='form-group'>skill should be add as string seperated by (,)<br/></small> */}
            </div><br/>
            <div className='form-group'>
                <input type="password" placeholder='password' name="password" onChange={changeHandler}  /><br/>
                
            </div><br/>
            <div className='form-group'>
                <input type="password" placeholder='confirm password' name="confirmpassword" onChange={changeHandler}  /><br/>
                
            </div><br/>



            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;<input type="submit" className='btnstyle' value="Register"/>
            </form>
            <p style= {{"fontSize": "20px"}}>
            Already  have an account? <Link to="/login" >Login</Link>
         </p>
        </section>

    </div>
  )
}

export default Register;


















