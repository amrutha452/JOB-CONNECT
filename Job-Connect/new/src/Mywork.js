
import React,{useState,useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const Mywork = () => {
  const [data,setData]=useState([])
  const [myimage,setMyimage]=useState([]);
  const [workid,setWorkid]=useState(null)
  // const [requestid,setRequestid]=useState(null)
  
useEffect((data)=>{
  axios.get('http://localhost:4000/mywork',{
    headers:{
      'x-token':localStorage.getItem('token')
    }
  }).then(res=>{
    setData(res.data);
   
  })
    axios.get('http://localhost:4000/myprofileimage',{
        headers:{
          'x-token':localStorage.getItem('token')
        }
      }).then(res=> {
        
        setMyimage(res.data)
      }
        
      )

},[])


const  delmywork=(e)=>{
    
 
  axios.delete('http://localhost:4000/delmywork/'+e,{
    headers:{
      'x-token':localStorage.getItem('token')
    } 
  }).then(res=>{alert(res.data)
    window.location.reload()
    
  })
  
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

  <div>
    <br/><br/>
    <center><h1 class="dashtitle">Current Work Status</h1> </center>
    <br/>
<br/>
  </div>
  <center>
<div className='myworkwrap'>
{(data.length>= 1) ?( 
data.map(work=>
  <div className='myworkmain'>


{myimage.length ?(
    
    myimage.map(image=>
      <div >
    {/* {image.myfile} */} 
   <center><img width="25%" height="25%" className='round-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACzs7N5eXnCwsL4+Pg6Ojrj4+PW1ta/v79HR0f8/PxhYWEZGRmWlpaKiory8vIxMTHq6uqtra1SUlJ+fn7T09MQEBDMzMyGhoaoqKjd3d1BQUGenp6Tk5O5ublycnIlJSVWVlYdHR1djNazAAADjUlEQVR4nO3cDXKiQBCGYUdQUHRFMVGjiTG5/x13KctEE5BpBHqGfZ8T9FcM8w+DAQAAAAAAAAAAAAAAAAAAAAAAALQkUbw9Do/bOEq0S2lDNJyNzcV4Noy0C2rY5MP8tJ5oF9WgyfJXvtyyLxmjaWG+3LQXbTUrzZfLtMt7XHA3oDGBdoEPSmYVAY2Z+T10VAf8F1G7yEdUNVHvG+qLVUBjXrQLrWtvGdCYvXapNR2sEx60S61naB3QmKF2sbUIAhqjXWwdkkfo50McV8e6MtYuV86+Iz3zrzt9FSZ81S5YrHzJVGyqXbBUOhcmnKfaJQvFwoDGxNolC4XihKF2yUL3V/ZFfFvt/xEn/KNdstBCnPBNu2Sh/j9D28XvN9+Wwf3vS5/FCZ+1SxZabYQBNyvtkqVkiycfl0/S4WKhXbDYVphwq12wnGxx8aldbg2yJbB/C+DBYCRKONIut443QUDfJqVnif2bOPf0hM1+5ubbjO3Lk2XAJ+1Ca0vsNtymnrbRXFp8zeTW0rddthur6ohL76bct9Kqhjr1+gnmkvtn+YHH7+CXY/m4OD9qF9eMtGwltfC+hX5ZFWVceN7F/BS+X+9rbN69ncbcE4XZIngPFlnYiyuJAADgP5VG+30cx/t91J8Z98VqmwXrw+kyM92cDusg2/Zl5j0Kd+Piw8TNeBd6udd941j1PcLM60Xw3vJrBP9uXp6Fa6t8ubWPq8XQ/qZ+7uBbxuffX1RW+fDpMkZqe2Bx68mbYXLyWSugMZ+efFRq14EW8+EjL4uTinvcP8WQ32f7yfFOVfoNQhGnr2VILieUc/jawq6RgMbstIOUqTcKFnH0YF9+tbuck/f45Pee73HwTvTjw8Qt5waNqOGAxjh2PjWSfqpWberWBkdT48Q1p8YM6YVgOw5dG05OrSQ8uXMTpY02mnOmnTbfj1640p/a76lJrbWjnbXTzZy50dk0PxR+c+IL7zYfoRsP0eZHSfU58Isl6d8hpPTPNJpcFRZRXymOHts8rLbUnoC328/ktPuaRza47Shvg7feSNWbqfwHH3K6vwSR/1hATvdXBO0O92eqg/5I+k16HRvNF7G9leE1zVXisZOEmjduuuhodLua9sf7nOaY397+xTXNvYxTJwlPigk7Caj6Y8yOEurtDCe9T5h2lFDvNtgoG3Yhc+f8AgAAAAAAAAAAAAAAAAAAAAAAoAf+AotlK7Pyn0zAAAAAAElFTkSuQmCC" alt="imahe not found" /></center> 

  
    
    
    </div>)) : (
    <img width="25%" height="25%" className='round-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACzs7N5eXnCwsL4+Pg6Ojrj4+PW1ta/v79HR0f8/PxhYWEZGRmWlpaKiory8vIxMTHq6uqtra1SUlJ+fn7T09MQEBDMzMyGhoaoqKjd3d1BQUGenp6Tk5O5ublycnIlJSVWVlYdHR1djNazAAADjUlEQVR4nO3cDXKiQBCGYUdQUHRFMVGjiTG5/x13KctEE5BpBHqGfZ8T9FcM8w+DAQAAAAAAAAAAAAAAAAAAAAAAALQkUbw9Do/bOEq0S2lDNJyNzcV4Noy0C2rY5MP8tJ5oF9WgyfJXvtyyLxmjaWG+3LQXbTUrzZfLtMt7XHA3oDGBdoEPSmYVAY2Z+T10VAf8F1G7yEdUNVHvG+qLVUBjXrQLrWtvGdCYvXapNR2sEx60S61naB3QmKF2sbUIAhqjXWwdkkfo50McV8e6MtYuV86+Iz3zrzt9FSZ81S5YrHzJVGyqXbBUOhcmnKfaJQvFwoDGxNolC4XihKF2yUL3V/ZFfFvt/xEn/KNdstBCnPBNu2Sh/j9D28XvN9+Wwf3vS5/FCZ+1SxZabYQBNyvtkqVkiycfl0/S4WKhXbDYVphwq12wnGxx8aldbg2yJbB/C+DBYCRKONIut443QUDfJqVnif2bOPf0hM1+5ubbjO3Lk2XAJ+1Ca0vsNtymnrbRXFp8zeTW0rddthur6ohL76bct9Kqhjr1+gnmkvtn+YHH7+CXY/m4OD9qF9eMtGwltfC+hX5ZFWVceN7F/BS+X+9rbN69ncbcE4XZIngPFlnYiyuJAADgP5VG+30cx/t91J8Z98VqmwXrw+kyM92cDusg2/Zl5j0Kd+Piw8TNeBd6udd941j1PcLM60Xw3vJrBP9uXp6Fa6t8ubWPq8XQ/qZ+7uBbxuffX1RW+fDpMkZqe2Bx68mbYXLyWSugMZ+efFRq14EW8+EjL4uTinvcP8WQ32f7yfFOVfoNQhGnr2VILieUc/jawq6RgMbstIOUqTcKFnH0YF9+tbuck/f45Pee73HwTvTjw8Qt5waNqOGAxjh2PjWSfqpWberWBkdT48Q1p8YM6YVgOw5dG05OrSQ8uXMTpY02mnOmnTbfj1640p/a76lJrbWjnbXTzZy50dk0PxR+c+IL7zYfoRsP0eZHSfU58Isl6d8hpPTPNJpcFRZRXymOHts8rLbUnoC328/ktPuaRza47Shvg7feSNWbqfwHH3K6vwSR/1hATvdXBO0O92eqg/5I+k16HRvNF7G9leE1zVXisZOEmjduuuhodLua9sf7nOaY397+xTXNvYxTJwlPigk7Caj6Y8yOEurtDCe9T5h2lFDvNtgoG3Yhc+f8AgAAAAAAAAAAAAAAAAAAAAAAoAf+AotlK7Pyn0zAAAAAAElFTkSuQmCC" alt="imahe not found" />

    )}



<br/>
<center><h2>{work.name}</h2>

<p>{work.email}</p>
<p><b style={{"fontSize":"20px"}}>Message:</b>&nbsp;{work.discussion}</p>
<Link style={{"textDecoration": "none"}}  to={`/viewprofile/${work.name}/${work.email}/${work.skill}/${work.taskgiverid}`}  ><button className='btncss1'>View profile</button></Link>

<button className="btncss2" onClick={()=>delmywork(work._id)} >Delete</button> 
</center>
</div>

   
  
  
  )


) :(<div><center><img src="https://qotoqot.com/sad-animations/img/200/sitting_alone/sitting_alone.gif" /><img width='180' height='180' src="https://ih1.redbubble.net/image.2491755395.0042/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"/></center></div>) }



</div>

</center>
    </div>


    
  )
}

export default Mywork

