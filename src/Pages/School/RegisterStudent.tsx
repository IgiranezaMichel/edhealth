import{useState} from 'react'
import {ToastContainer,toast}from 'react-toastify'
export const RegisterStudent=()=>{
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [nationalId,setNationalId]=useState('');
    const [gender,setGender]=useState('');
    return(
        <main className="row g-3 d-flex align-content-center justify-content-center col-12">
         <div className="fw-bold text-center">
                  Register Student
                </div>
                <div className="col-md-4">
                  <label className="form-label">First name</label>
                  <input type="text" className="form-control border border-dark" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Last name</label>
                  <input type="text" className="form-control border border-dark" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="col-md-4">
                  <label   className="form-label">National Id</label>
                  <div className="input-group">
                    <span className="bi bi-person"></span>
                    <input type="text" className="form-control border border-dark" onChange={(e)=>setNationalId(e.target.value)} value={nationalId}/>
                  </div>
                </div>
                 
                <div className="col-md-4">
                  <label className="form-label">Gender</label>
                  <div className="mb-3">
                    <select  onChange={(e)=>setGender(e.target.value)} className="form-select border border-dark" aria-label="Default select example">
                      <option value=''>select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control border border-dark" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="col-md-4">
                  <label   className="form-label">Profile</label>
                  <div className="input-group">
                    <span className="bi bi-person"></span>
                    <input type="file" className="form-control border border-dark" onChange={(e)=>setNationalId(e.target.value)} value={nationalId}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <label   className="form-label">Email</label>
                  <div className="input-group">
                    <span className="bi bi-person"></span>
                    <input type="email" className="form-control border border-dark" onChange={(e)=>setNationalId(e.target.value)} value={nationalId}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <label   className="form-label">Date of birth</label>
                  <div>
                    <input type="date" className="form-control border border-dark" onChange={(e)=>setNationalId(e.target.value)} value={nationalId}/>
                  </div>
                </div>
                <div className="col-12">
                 <section className="text-center">
                            <button className="fw-bolder fs-5 text-light border-0 rounded-2 p-1" style={{ backgroundColor: '#93499F' }}>REGISTER</button>
                            <button className="fw-bolder fs-5 text-light border-0 mb-2 m-2 rounded-2 p-1" style={{ backgroundColor: '#93499F' }}>View Registered</button>
                            <button className="fw-bolder fs-5 text-light border-0 rounded-2 p-1" style={{ backgroundColor: '#93499F' }}>View Completed Student</button>
                        </section>
                </div>
                <ToastContainer/>
        </main>
    )
}