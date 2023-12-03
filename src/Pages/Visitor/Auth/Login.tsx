import { Link } from "react-router-dom";
import Navigation from "../../../Component/Visitor/Navigation";

const Login=()=>{
    return(
    <main>
        <Navigation/>
        <section className="row m-auto col-md-6 py-5">
            <div className="card col-md-8 p-5 rounded-0">
                <span className="d-block display-6 fw-bolder text-center py-4">Login</span>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control" name="formId1" id="formId1" placeholder=""/>
                  <label className="fw-bolder">National Id</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control" name="email" id="formId1" placeholder=""/>
                  <label className="fw-bolder">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control" name="formId1" id="formId1" placeholder=""/>
                  <label className="fw-bolder">Password</label>
                </div>
                <span className="text-muted d-block">Don't have an account?</span>
                <span className="text-primary text-uppercase">Register</span>
                <button type="button" className="btn btn-outline-primary mt-2 d-block">Sign</button>
            </div>
            <div className="card col-md-4 rounded-0" style={{display:'flex',justifyContent:'center'}}>
               <div>
                <div className="card bg-dark text-white">
                    <img className="card-img" src="vite.svg" alt="Title"/>
                </div>
               </div>
            </div>
            
            {/* <Link to={'signup'} className="text-bg-primary">Register</Link> */}
        </section>
    </main>)
}
export default Login;