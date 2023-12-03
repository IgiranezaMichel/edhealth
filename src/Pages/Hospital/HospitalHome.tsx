import AcustomNavBar from "../../Component/StudentComponents/AcustomNavBar";
import SideBar from "../../Component/StudentComponents/SideBar";

const HospitalHome=()=>{
return(
<main >

<div className="sticky-top">
<AcustomNavBar institutionName="Hospital Name"/>
</div>
<section className="row col-12 m-auto  mt-5 overflow-auto">
   <section className="col-md-3 overflow-auto" >
        <SideBar class="text-info fw-bolder"/>
    </section> 
    <section className="col-md-9 overflow-auto">
        <div className="card px-3 py-3 mt-3">
            <span className="fw-bolder fs-4 text-uppercase">Publish Training</span>
            <div className="col-md-12 m-auto g-3 row">
                <div className="form-floating mb-3 col-md-4">
                    <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Title</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                   <div className="mb-3">
                     <textarea className="form-control" name="" placeholder="Discription ....." id="" rows={2}></textarea>
                   </div>
                </div>
                <div className="form-floating mb-3 col-md-4">
                    <input type="date" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Deadline</label>
                </div>
            </div>
            <button className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{backgroundColor:'#49579F'}}>Register</button>
            <div>
            <span className="" style={{float:'right',color:'#49579F'}} >View Trainings</span>
            </div>
        </div>
        {/*  */}
        <div className="card px-3 py-3 mt-3">
            <span className="fw-bolder fs-4 text-uppercase">Publish Jobs</span>
            <div className="col-md-12 m-auto g-3 row">
                <div className="form-floating mb-3 col-md-4">
                    <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Title</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                   <div className="mb-3">
                     <textarea className="form-control" name="" placeholder="Discription ....." id="" rows={2}></textarea>
                   </div>
                </div>
                <div className="form-floating mb-3 col-md-4">
                    <input type="date" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Deadline</label>
                </div>
            </div>
            <button className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{backgroundColor:'#49579F'}}>Register</button>
            <div>
            <span className="" style={{float:'right',color:'#49579F'}} >View Trainings</span>
            </div>
        </div>
        {/*  */}
        <div className="card px-3 py-3 mt-3">
            <span className="fw-bolder fs-4 text-uppercase">Add Certificate</span>
            <div className="col-md-12 m-auto g-3 row">
                <div className="form-floating mb-3 col-md-4">
                    <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Title</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                   <div className="mb-3">
                     <textarea className="form-control" name="" placeholder="Discription ....." id="" rows={2}></textarea>
                   </div>
                </div>
                <div className="form-floating mb-3 col-md-4">
                    <input type="date" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label className="fw-bolder">Deadline</label>
                </div>
            </div>
            <button className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{backgroundColor:'#49579F'}}>Register</button>
            <div>
            <span className="" style={{float:'right',color:'#49579F'}} >View Trainings</span>
            </div>
        </div>
    </section>  
</section>   
</main>
)}
export default HospitalHome;