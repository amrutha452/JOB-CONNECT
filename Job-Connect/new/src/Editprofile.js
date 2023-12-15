
import React,{useState,useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

const Editprofile = () => {
    
    const [editdata,setEditdata]=useState({
        name:'',
        email:'',
        mobile:'',
        skill:'',
        password:'',
        confirmpassword:'',
      });
      const [data,setData]=useState(null)

      useEffect(()=>{
        axios.get('http://localhost:4000/myprofile',{
          headers:{
            'x-token':localStorage.getItem('token')
          }
        }).then(res=>setData(res.data))
    },[])

 
      const changeHandler =e=>{
        setEditdata({...editdata,[e.target.name]:e.target.value})
      }
      const submitHandler=e=>{
        e.preventDefault();
        console.log(editdata);
        axios.post('http://localhost:4000/editprofile',editdata,{
          headers:{
            'x-token':localStorage.getItem('token')
          }
        }).then(res=> alert(res.data))

    }

  return (
    <div>
     <nav className='viewNav' >
      
      <Link className="dashtitle" style={{"textDecoration": "none",color:"#214c76","fontSize":"40px"}} to='/'>Job-Connect</Link>
  
  <ul>
      <li><Link className="viewdash" style={{"textDecoration": "none",color:"#214c76"}} to="myprofile">Myprofile</Link></li>
      <li><Link  className="viewdash" style={{"textDecoration": "none",color:"#214c76"}} to="/dashboard">Dashboard</Link></li>
      <li><Link className="viewdash" style={{"textDecoration": "none",color:"#214c76"}} to="/login" onClick={()=>localStorage.removeItem('token')}>LogOut</Link></li>
  </ul>
</nav>
{data &&
  <section className='container' style={{"textAlign":"center"}}>
        <br/>
        
        <h1 className='dashlead'> EDIT DETAILS </h1><br/><br/>
  <div className='editmain'>
    <div className='editimage' >
      <img src="https://png.pngtree.com/png-vector/20190715/ourlarge/pngtree-edit-profile-icon-trendy-style-isolated-background-png-image_1542874.jpg"/>
    </div>
    
        <form className='form' onSubmit={submitHandler} autoComplete='off'>
            <div className='editformitem' >
             <p>Name    : </p>  &nbsp;&nbsp;<input type="text"   placeholder={data.name} name="name" onChange={changeHandler} required/><br/>

            </div>
            <br/>
            <div className='editformitem'>
                <p>Email  :</p> &nbsp;&nbsp;<input type="email"  placeholder={data.email} name="email" onChange={changeHandler}  required/><br/>

            </div>
            <br/>
            <div className='editformitem'>
              <p>Mobile no:</p><input type="text"  placeholder={data.mobile} name="mobile" onChange={changeHandler}  /><br/>
                
            </div><br/>
    
            <div className='editformitem'>
               <p>  Skills : </p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  placeholder={data.skill} name="skill" onChange={changeHandler}  /><br/>

            </div>
            <br/>
            <div className='editformitem'>
               <p> Password:</p>&nbsp;&nbsp;&nbsp;<input type="password" placeholder={data.password} name="password" onChange={changeHandler}  /><br/>
                
            </div>
            <br/>
            <div className='editformitem'>
             <p>confirmpassword:</p><input type="password"  placeholder={data.confirmpassword} name="confirmpassword" onChange={changeHandler}  /><br/>
                
            </div>


       
      
           <input type="submit" style={{"width":"140px","height":"45px"}} className='btnstyle' value="Update"/>
            </form>
            </div>
            </section>
}

    </div>
  )
}

export default Editprofile
