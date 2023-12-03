import AcustomNavBar from "../../Component/StudentComponents/AcustomNavBar";
import SideBar from "../../Component/StudentComponents/SideBar";

const HospitalHome=()=>{
return(
<main className="row col-12 m-auto">
<AcustomNavBar institutuionName="Hospital Name"/>
   <section className="col-md-3">
        <SideBar/>
    </section> 
    <section className="col-md-9">
        <div className="card">
            <div className="col-md-10 m-auto g-3 row">
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
            <button className="text-uppercase btn" style={{backgroundColor:'grey'}}>Register</button>
        </div>
    </section>     
</main>
)}
export default HospitalHome;