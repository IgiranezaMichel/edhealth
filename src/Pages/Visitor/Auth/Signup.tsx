import Navigation from "../../../Component/Visitor/Navigation";

const Signup=()=>{
    return(
        <>
        <main>
        <Navigation/>
        <section className="row m-auto col-md-9 py-5">
            <div className="card col-md-7 rounded-0 p-0 border-0 d-sm-none d-md-block d-lg-block" style={{display:'flex',justifyContent:'center'}}>
               <div>
                <div className="card bg-dark text-white">
                    <img className="card-img" src="doctor.png" alt="Title"/>
                </div>
               </div>
            </div>
            <div className="card col-md-5 p-5 rounded-0 col-12">
                <span className="d-block display-6 fw-bolder text-center py-4">Create account</span>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control" name="email" id="formId1" placeholder=""/>
                  <label className="fw-bolder">Name</label>
                </div>
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
                    type="text"
                    className="form-control" name="email" id="formId1" placeholder=""/>
                  <label className="fw-bolder">Phone Number</label>
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
                <span className="text-muted d-block">Do you have an account?</span>
                <span className="text-primary text-uppercase">Login</span>
                <button type="button" className="btn btn-outline-primary mt-2 d-block">Register</button>
            </div>
            {/* <Link to={'signup'} className="text-bg-primary">Register</Link> */}
        </section>
    </main>
        </>
    )
}
export default Signup;