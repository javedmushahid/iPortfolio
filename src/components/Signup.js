import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link,useHistory } from 'react-router-dom'


const Signup = () => {
const history=useHistory()
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })





const postData=async (e)=>{
  e.preventDefault();

  const {name,email,phone,work,password,cpassword}=user;
  

  const res=await fetch('/register',{
    method:"POST",
   
    headers:{
      "Content-Type":"application/json"      
    },
    body:JSON.stringify({
      name,email,phone,work,password,cpassword
    })
  })

const data=await res.json()

if(data.status===422 || !data){
  window.alert("Invalid Credentials")
}else{
  window.alert("Registration Succesfull")
  history.push("/login")
}

}
  return (

    <>
    <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form method='POST' className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='name' onChange={(e)=>{name:e.target.value}} id="name" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name='email'  onChange={(e)=>{email:e.target.value}}  id="email" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="tel" name='phone'  onChange={(e)=>{phone:e.target.value}}  id="phone" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Phone Number</label>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-star fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name='work' onChange={(e)=>{work:e.target.value}} id="work" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Profession</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name='password' onChange={(e)=>{password:e.target.value}}  id="password" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name='cpassword' onChange={(e)=>{cpassword:e.target.value}}  id="cpassword" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                   <input type='submit' name='signup' id='signup' onClick={postData} className='form-submit btna form-group form-button'/>
                  </div>
                  <div className="text-center">Already a user? <Link to="/login"> Sign in</Link></div>
                </form>

              </div>
              <div className=" col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&i onChange={handleInputs}xid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80"
                  className="opct img-fluid" alt="Sample image"/>
          
              </div>
             
          
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Signup