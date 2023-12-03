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
                    <label>Name</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                    <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label>Name</label>
                </div>
                <div className="form-floating mb-3 col-md-4">
                    <input type="text" className="form-control" name="formId1" id="formId1" placeholder=""/>
                    <label>Name</label>
                </div>
            </div>
        </div>
    </section>     
</main>
)}
export default HospitalHome;