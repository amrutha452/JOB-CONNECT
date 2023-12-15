

import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Redirect} from 'react-router-dom';

import axios from 'axios';

const Myprofile = () => {

  const [data,setData]=useState(null);
  const [review,setReview]=useState([])
  const [myimage,setMyimage]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/myprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=>setData(res.data)
      
      
    )

    axios.get('http://localhost:4000/myreview',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res=> setReview(res.data))

   

      axios.get('http://localhost:4000/myprofileimage',{
        headers:{
          'x-token':localStorage.getItem('token')
        }
      }).then(res=> {
        
        setMyimage(res.data)
      }
        
      )

  },[])

  

if(!localStorage.getItem('token')){
  return <Redirect to="/login" />
}



  return (
   <div>
    <nav className='viewNav' >
      
      <Link className="dashtitle" style={{"textDecoration": "none",color:"#214c76","fontSize":"40px"}} to='/'>Job-Connect</Link>
  
  <ul>
    
      <li><Link  className="viewdash" style={{"textDecoration": "none",color:"#214c76"}} to="/dashboard">Dashboard</Link></li>
      <li><Link className="viewdash" style={{"textDecoration": "none",color:"#214c76"}} to="/login" onClick={()=>localStorage.removeItem('token')}>LogOut</Link></li>
  </ul>
</nav>


    
<section className='container' style={{"textAlign":"center"}}>
<br/><br/>

{data && 
<div className='viewprofile1'>

<div className='viewprofile2'>




{myimage.length ?(
    
    myimage.map(myimage=>
      <div>
    
    <img width="25%" height="25%" className="viewprofileimg" src={myimage.myfile} alt="imahe not found" />

  
    
    
    </div>)) : (
    <img width="25%" height="25%" className="viewprofileimg2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACzs7N5eXnCwsL4+Pg6Ojrj4+PW1ta/v79HR0f8/PxhYWEZGRmWlpaKiory8vIxMTHq6uqtra1SUlJ+fn7T09MQEBDMzMyGhoaoqKjd3d1BQUGenp6Tk5O5ublycnIlJSVWVlYdHR1djNazAAADjUlEQVR4nO3cDXKiQBCGYUdQUHRFMVGjiTG5/x13KctEE5BpBHqGfZ8T9FcM8w+DAQAAAAAAAAAAAAAAAAAAAAAAALQkUbw9Do/bOEq0S2lDNJyNzcV4Noy0C2rY5MP8tJ5oF9WgyfJXvtyyLxmjaWG+3LQXbTUrzZfLtMt7XHA3oDGBdoEPSmYVAY2Z+T10VAf8F1G7yEdUNVHvG+qLVUBjXrQLrWtvGdCYvXapNR2sEx60S61naB3QmKF2sbUIAhqjXWwdkkfo50McV8e6MtYuV86+Iz3zrzt9FSZ81S5YrHzJVGyqXbBUOhcmnKfaJQvFwoDGxNolC4XihKF2yUL3V/ZFfFvt/xEn/KNdstBCnPBNu2Sh/j9D28XvN9+Wwf3vS5/FCZ+1SxZabYQBNyvtkqVkiycfl0/S4WKhXbDYVphwq12wnGxx8aldbg2yJbB/C+DBYCRKONIut443QUDfJqVnif2bOPf0hM1+5ubbjO3Lk2XAJ+1Ca0vsNtymnrbRXFp8zeTW0rddthur6ohL76bct9Kqhjr1+gnmkvtn+YHH7+CXY/m4OD9qF9eMtGwltfC+hX5ZFWVceN7F/BS+X+9rbN69ncbcE4XZIngPFlnYiyuJAADgP5VG+30cx/t91J8Z98VqmwXrw+kyM92cDusg2/Zl5j0Kd+Piw8TNeBd6udd941j1PcLM60Xw3vJrBP9uXp6Fa6t8ubWPq8XQ/qZ+7uBbxuffX1RW+fDpMkZqe2Bx68mbYXLyWSugMZ+efFRq14EW8+EjL4uTinvcP8WQ32f7yfFOVfoNQhGnr2VILieUc/jawq6RgMbstIOUqTcKFnH0YF9+tbuck/f45Pee73HwTvTjw8Qt5waNqOGAxjh2PjWSfqpWberWBkdT48Q1p8YM6YVgOw5dG05OrSQ8uXMTpY02mnOmnTbfj1640p/a76lJrbWjnbXTzZy50dk0PxR+c+IL7zYfoRsP0eZHSfU58Isl6d8hpPTPNJpcFRZRXymOHts8rLbUnoC328/ktPuaRza47Shvg7feSNWbqfwHH3K6vwSR/1hATvdXBO0O92eqg/5I+k16HRvNF7G9leE1zVXisZOEmjduuuhodLua9sf7nOaY397+xTXNvYxTJwlPigk7Caj6Y8yOEurtDCe9T5h2lFDvNtgoG3Yhc+f8AgAAAAAAAAAAAAAAAAAAAAAAoAf+AotlK7Pyn0zAAAAAAElFTkSuQmCC" alt="imahe not found" />

    )}



<br/>
<h2 className='viewname'>{data.name}</h2>

<p className='viewemail'>{data.email}</p>

<p className='viewemail'>{data.skill}</p>

</div>


<div className='viewprofilereview' >
<br/>
<div className='viewprofilereview1'>
<div className='reviewicon'><div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0n1Em2fCpcUo3EfbAblUdnCDVc7sAev92g&usqp=CAU"/></div><div><h2 className='viewtitle'>Review and Rating </h2></div></div>
<div className='viewprofilereview3'>

{review.length ?(
review.map(review=>
  <div className='reviewbox'>

    <h4><Link to="#" style={{"textDecoration": "none",color:"#214c76"}} >{review.taskgiver}</Link></h4>
  
    <div><p>{review.rating}/5<br/>{review.comment}
    </p></div>
</div>)) : (
 <div className='noreview'>No Review Given Yet <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8UESo63SS9a3NNLKuLIeDGAa50jpYFwvzi-gv2EfOyeAIEBNm79iMrcyjszvCrmutJg&usqp=CAU"/></div>

)}

<br/><br/><br/>
</div>
<div>
<div>

    
</div>
</div>

</div>
</div>
</div>

}
</section>
</div>
  )
}

export default Myprofile








// import React,{useState,useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import {Link,Redirect} from 'react-router-dom';

// import axios from 'axios';

// const Myprofile = () => {

//   const [data,setData]=useState(null);
//   const [review,setReview]=useState([])
//   const [myimage,setMyimage]=useState([]);
//   useEffect(()=>{
//     axios.get('http://localhost:4000/myprofile',{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=>setData(res.data)
      
      
//     )

//     axios.get('http://localhost:4000/myreview',{
//       headers:{
//         'x-token':localStorage.getItem('token')
//       }
//     }).then(res=> setReview(res.data))

   

//       axios.get('http://localhost:4000/myprofileimage',{
//         headers:{
//           'x-token':localStorage.getItem('token')
//         }
//       }).then(res=> {
        
//         setMyimage(res.data)
//       }
        
//       )

//   },[])

  

// if(!localStorage.getItem('token')){
//   return <Redirect to="/login" />
// }



//   return (
//    <div>
//     <nav className='navbar bg-dark' >
//     <h1>
//         <Link to='/'><i className="fas fa-code"></i>Ammu Website</Link>
//     </h1> 
//     <ul>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/login">Logout</Link></li>
//     </ul>
//   </nav>

    
// <section className='container' style={{"textAlign":"center"}}>
// <br/><br/><br/><br/><br/>
// <Link to="/dashboard" className='btn btn-primary'>Dashboard</Link>

// {data && 
// <div className='profile-grid my-1'>

// <div className='profile-top bg-secondary p-2 '>




// {myimage.length ?(
    
//     myimage.map(myimage=>
//       <div>
    
//     <img width="25%" height="25%" className='round-image' src={myimage.myfile} alt="imahe not found" />

  
    
    
//     </div>)) : (
//     <img width="25%" height="25%" className='round-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsef7thzQjiXGYs7So3TolzWDcDun_BldzyQ&usqp=CAU" alt="imahe not found" />

//     )}



// <br/>
// <h2>{data.name}</h2>
// <br/>
// <p>{data.email}</p>
// <br/>
// <p>India</p>

// </div>


// <div className='profile-github' >
// <br/>
// <h2 className='text-primary my-1'>Review and Rating </h2>
// <div >

// {review.length ?(
// review.map(review=>
//   <div>
// <br/>
//     <h4><Link to="#" >{review.taskgiver}</Link></h4>
//     <br/>
//     <p>{review.rating}/5</p>
//     <p>{review.comment}</p>
// </div>)) : (
// <p>No review yet</p>
// )}

// <br/><br/><br/>
// </div>
// <div>
// <div>

    
// </div>
// </div>

// </div>

// </div>
// }
// </section>
// </div>
//   )
// }

// export default Myprofile