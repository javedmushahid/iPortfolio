import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Login = () => {
  const history=useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const loginUser=async (e)=>{
   e.preventDefault() 

   const res=await fetch('http://localhost:5000/signin',{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({
      email,password
    })
   })

   const data=await res.json()

if(res.status===400 ||!data){
  window.alert('Invalid ')
}
else{
  window.alert('Welcome')
  history.push("/")
}

  }
  
  
  return (
  <>
  <div className="wrapper">
       
        <div className="text-center mt-4 name">
            Sign in
        </div>
        <form method='POST' className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user namer"></span>
                <input type="text"className='namer' onChange={(e)=>setEmail(e.target.value)} name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" onChange={(e)=>setPassWord(e.target.value)} name="password" id="pwd" placeholder="Password"/>
            </div>
<div className="form-group">
<input type='submit' name="signin" id="signin" value="Sign in" className="btn mt-3" onClick={loginUser}/>

  </div> 
  
  
         </form>
        <div className="form-group">
            
          <div className="text-center new">New User? <Link to="/signup">Create New Account</Link></div>
          </div>
    </div>
  </>
  )
}

export default Login