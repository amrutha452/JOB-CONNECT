

import React,{useState,useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './index.css';
///props used to send param to access in url data

const Dashboard = () => {
  const [data,setData]=useState([]);
const [len,setLen]=useState(null)
const [count,setCount]=useState(null)
  const [val,setVal]=useState(null);

  useEffect((data)=>{
    axios.get('http://localhost:4000/allprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=>{
      setData(res.data);
     
    })
    axios.get('http://localhost:4000/mywork',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=>{
      setLen(res.data.length);
     
    })
    axios.get('http://localhost:4000/requestwork',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=>{
      setCount(res.data.length);
     
    })
   
  },[])

  const changeHandler =e=>{
    setVal(e.target.value)
   
  }

  const submitHandlerDashboard =e =>{
    
 
   axios.get('http://localhost:4000/allprofile',{
     headers:{
       'x-token':localStorage.getItem('token')
     }
   }).then(res=>{
     setData(res.data);
  
   })
   

    
 }

  const submitHandler =e =>{
     e.preventDefault()
     
    axios.get('http://localhost:4000/searchprofile/'+val,{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=>{
      setData(res.data);
      
    })
    
    
  }
 
if(!localStorage.getItem('token')){
  return <Redirect to="/login" />
}
 
  return (
    <div className='dash'>
     <nav className='dashNav' >
      
            <Link className="dashtitle" style={{"textDecoration": "none",color:"#214c76"}} to='/'>Job-Connect</Link>
        
        <ul>
            <li><Link className="dashtitle1" style={{"textDecoration": "none",color:"#214c76"}} to="myprofile">Myprofile</Link></li>
            <li><Link className="dashtitle1"  style={{"textDecoration": "none",color:"#214c76"}} to="editprofile">Edit</Link></li>
            <li><Link className="dashtitle1" style={{"textDecoration": "none",color:"#214c76"}} to="test">EditImage</Link></li>
            <li><Link className="dashtitle1" style={{"textDecoration": "none",color:"#214c76"}} to="mywork" >Mywork<sup style={{"background":"lightblue","borderRadius":"40%","padding":"0 5%"}}>{len}</sup></Link></li>
            <li><Link className="dashtitle1" style={{"textDecoration": "none",color:"#214c76"}} to="requestwork" >Request<sup style={{"background":"lightblue","borderRadius":"40%","padding":"0 5%"}}>{count}</sup></Link></li>

            {/* <li><Link style={{"textDecoration": "none",color:"black"}} to="dashboard" onClick={submitHandlerDashboard}>Dashboard</Link></li> */}
            <li><Link className="dashtitle1" style={{"textDecoration": "none",color:"#214c76"}} to="/login" onClick={()=>localStorage.removeItem('token')}>LogOut</Link></li>
        </ul>
      </nav>

      <center>
        <br/><br/>
      <form   onSubmit={submitHandler} autoComplete='off'>
     
        {/* <input className='dashform' type="text" name="text" placeholder={val} onChange={changeHandler}/> */}
        

        <input className='dashform' type="text" name="text" placeholder="Search Here.." onChange={changeHandler}/>

         <input  type="submit"   className="dashbtn" value="Search"/>
      

    </form>
    <br/><br/><p className='dashlead'>Select Your Required Profile</p>

    </center>
 
<center>
      <section className='dashcontainer' style={{"textAlign":"center"}}>
        <br/>
        {/* <h1 className='large text-primary'>Developers</h1><br/> */}
      <br/>
       
       
        <div className='profiles'>

{data.length>=1 ? 
          data.map(profile =>
            
            
        <div className='dashprofile'>
          <div className='dashflex'>
       <div className='dashimg'>
         <img className='dashimg1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACzs7N5eXnCwsL4+Pg6Ojrj4+PW1ta/v79HR0f8/PxhYWEZGRmWlpaKiory8vIxMTHq6uqtra1SUlJ+fn7T09MQEBDMzMyGhoaoqKjd3d1BQUGenp6Tk5O5ublycnIlJSVWVlYdHR1djNazAAADjUlEQVR4nO3cDXKiQBCGYUdQUHRFMVGjiTG5/x13KctEE5BpBHqGfZ8T9FcM8w+DAQAAAAAAAAAAAAAAAAAAAAAAALQkUbw9Do/bOEq0S2lDNJyNzcV4Noy0C2rY5MP8tJ5oF9WgyfJXvtyyLxmjaWG+3LQXbTUrzZfLtMt7XHA3oDGBdoEPSmYVAY2Z+T10VAf8F1G7yEdUNVHvG+qLVUBjXrQLrWtvGdCYvXapNR2sEx60S61naB3QmKF2sbUIAhqjXWwdkkfo50McV8e6MtYuV86+Iz3zrzt9FSZ81S5YrHzJVGyqXbBUOhcmnKfaJQvFwoDGxNolC4XihKF2yUL3V/ZFfFvt/xEn/KNdstBCnPBNu2Sh/j9D28XvN9+Wwf3vS5/FCZ+1SxZabYQBNyvtkqVkiycfl0/S4WKhXbDYVphwq12wnGxx8aldbg2yJbB/C+DBYCRKONIut443QUDfJqVnif2bOPf0hM1+5ubbjO3Lk2XAJ+1Ca0vsNtymnrbRXFp8zeTW0rddthur6ohL76bct9Kqhjr1+gnmkvtn+YHH7+CXY/m4OD9qF9eMtGwltfC+hX5ZFWVceN7F/BS+X+9rbN69ncbcE4XZIngPFlnYiyuJAADgP5VG+30cx/t91J8Z98VqmwXrw+kyM92cDusg2/Zl5j0Kd+Piw8TNeBd6udd941j1PcLM60Xw3vJrBP9uXp6Fa6t8ubWPq8XQ/qZ+7uBbxuffX1RW+fDpMkZqe2Bx68mbYXLyWSugMZ+efFRq14EW8+EjL4uTinvcP8WQ32f7yfFOVfoNQhGnr2VILieUc/jawq6RgMbstIOUqTcKFnH0YF9+tbuck/f45Pee73HwTvTjw8Qt5waNqOGAxjh2PjWSfqpWberWBkdT48Q1p8YM6YVgOw5dG05OrSQ8uXMTpY02mnOmnTbfj1640p/a76lJrbWjnbXTzZy50dk0PxR+c+IL7zYfoRsP0eZHSfU58Isl6d8hpPTPNJpcFRZRXymOHts8rLbUnoC328/ktPuaRza47Shvg7feSNWbqfwHH3K6vwSR/1hATvdXBO0O92eqg/5I+k16HRvNF7G9leE1zVXisZOEmjduuuhodLua9sf7nOaY397+xTXNvYxTJwlPigk7Caj6Y8yOEurtDCe9T5h2lFDvNtgoG3Yhc+f8AgAAAAAAAAAAAAAAAAAAAAAAoAf+AotlK7Pyn0zAAAAAAElFTkSuQmCC" alt="imahe not found" />
      </div>
       <div className='dashinfo'>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <p>India</p>    
<div className='dashskill'>
     <center> 
 <p>{profile.skill}</p>
     </center>
     <br/>
     </div>
     </div>
   <div className='dashbotton'> 
     <Link  style={{"textDecoration": "none"}} to={`/viewprofile/${profile.name}/${profile.email}/${profile.skill}/${profile._id}`} ><botton className='dashbtnview'>View profile</botton></Link>
</div>
 
 
      </div>
      {/* <Link  style={{"textDecoration": "none",color:"black"}} to={`/viewprofile/${profile.name}/${profile.email}/${profile.skill}/${profile._id}`} ><botton className='dashbtnview'>View profile</botton></Link> */}

    </div>
   )
          
          : <h1 style={{"color":"#214c76"}}><img src='https://img.freepik.com/premium-vector/file-found-illustration-with-confused-people-holding-big-magnifier-search-no-result_258153-336.jpg' height="250px" />No Matching Results Found</h1>
}
         </div>
        </section>
        </center>
    </div>
  )
}

export default Dashboard






























// import React,{useState,useEffect} from 'react'
// import {Link,Redirect} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';
// import './index.css';
// ///props used to send param to access in url data

// const Dashboard = () => {
//   const [data,setData]=useState([]);
// const [len,setLen]=useState(null)
// const [count,setCount]=useState(null)
//   const [val,setVal]=useState(null);

//   useEffect((data)=>{
//     axios.get('http://localhost:4000/allprofile',{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=>{
//       setData(res.data);
     
//     })
//     axios.get('http://localhost:4000/mywork',{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=>{
//       setLen(res.data.length);
     
//     })
//     axios.get('http://localhost:4000/requestwork',{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=>{
//       setCount(res.data.length);
     
//     })
   
//   },[])

//   const changeHandler =e=>{
//     setVal(e.target.value)
   
//   }

//   const submitHandlerDashboard =e =>{
    
 
//    axios.get('http://localhost:4000/allprofile',{
//      headers:{
//        'x-token':localStorage.getItem('token')
//      }
//    }).then(res=>{
//      setData(res.data);
  
//    })
   

    
//  }

//   const submitHandler =e =>{
//      e.preventDefault()
     
//     axios.get('http://localhost:4000/searchprofile/'+val,{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=>{
//       setData(res.data);
      
//     })
    
    
//   }
 
// if(!localStorage.getItem('token')){
//   return <Redirect to="/login" />
// }
 
//   return (
//     <div>
//      <nav className='navbar bg-dark' >
//         <h1>
//             <Link to='/'><i className="fas fa-code"></i>Ammu Website</Link>
//         </h1> 
//         <ul>
//             <li><Link to="myprofile">Myprofile</Link></li>
//             <li><Link to="editprofile">Edit</Link></li>
//             <li><Link to="test">EditImage</Link></li>
//             <li><Link to="mywork" >Mywork <sup style={{"background":"white","borderRadius":"40%","padding":"0 5%"}}>{len}</sup></Link></li>
//             <li><Link to="requestwork" >Request<sup style={{"background":"white","borderRadius":"40%","padding":"0 5%"}}>{count}</sup></Link></li>

//             <li><Link to="dashboard" onClick={submitHandlerDashboard}>Dashboard</Link></li>
//             <li><Link to="/login" onClick={()=>localStorage.removeItem('token')}>LogOut</Link></li>
//         </ul>
//       </nav>

//       <center>
//         <br/><br/>
//       <form  className='form' onSubmit={submitHandler} autoComplete='off'>
     
//         <input type="text" name="text" placeholder={val} onChange={changeHandler}/>
//          <input type="submit"   className="btn btn-primary" value="Search"/>

//     </form>
//     </center>
 

//       <section className='container' style={{"textAlign":"center"}}>
//         <br/>
//         <h1 className='large text-primary'>Developers</h1><br/>
//         <p className='lead'>Browse and connect with developers</p><br/>
       
//         <div className='profiles'>

// {data.length>=1 ? 
//           data.map(profile =>
            
            
//         <div className='profile bg-light'>
//         <img width="35%" height="35%" className='round-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsef7thzQjiXGYs7So3TolzWDcDun_BldzyQ&usqp=CAU" alt="imahe not found" />
      
//       <div >
//       <h2>{profile.name}</h2>
//       <p>{profile.email}</p>
//       <p>India</p>
//       <ul style={{"textAlign":"center","display":"flex","textDecoration":"none"}}>
//       {
//         profile.skill.split(',').map(skill=>
//           <li className='text-secondary'>{skill}</li>
//         )
//       }
//      </ul>
//       <Link to={`/viewprofile/${profile.name}/${profile.email}/${profile.skill}/${profile._id}`} className='btn btn-primary'>View profile</Link>
//       </div><br/>
    
//     </div>
//    )
          
//           : <h1>No Matching Results Found</h1>}

//          </div>
//         </section>

//     </div>
//   )
// }

// export default Dashboard
