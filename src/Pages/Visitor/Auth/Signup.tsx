import { ToastContainer ,toast} from "react-toastify";
import Navigation from "../../../Component/Visitor/Navigation";
import {useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
const Signup=()=>{
const [username,setUserName]=useState('');
const [password,setPassword]=useState('');
useEffect(()=>{
console.log('username '+username+'password =>'+password)
})

const validateForm=()=>{
  username==''?toast.error('Provide email')
  :
  password==''?toast('Provide password'):
  toast.success('Done!') ;
}
    return(
        <>
        <main>
        <Navigation/>
        <section className="p-5" style={{backgroundImage:'url(/visit/bg.jpeg)',backgroundSize:'cover',backgroundPosition:'fixed'}}>
        <section className="row container-lg m-auto mt-5">
            <div className="card col-md-5 d-flex justify-content-center align-content-center rounded-0 p-0 border-0">
               <div>
                <div className="card p-0 rounded-0 border-0">
                    <img className="card-img" src="/visit/doctor.jpeg" alt="Title"/>
                </div>
               </div>
            </div>
            <section className="card col-md-7 p-5 d-flex justify-content-center align-content-center rounded-0 col-12">
             <section className="row g-3">
              <span className="d-block text-center display-6 fw-bold">Login form</span>
               <div>
                 <label  className="form-label">Email</label>

                 <input value={username} type="text" onChange={(t=>(setUserName(t.target.value)))} className="form-control"/>
               </div>
   
               <div>
                 <label  className="form-label">Password</label>
                 <input value={password} type="password" onChange={(t=>(setPassword(t.target.value)))} className="form-control" />
               </div>
  
               <div className="col-12 modal-footer">
                 <button className="btn btn-primary px-3 fw-bold" onClick={validateForm}>Login</button>
               </div>
             </section>
            </section>
            {/* <Link to={'signup'} className="text-bg-primary">Register</Link> */}
        </section>
        </section>
        <ToastContainer/>
    </main>
        </>
    )
}
export default Signup;