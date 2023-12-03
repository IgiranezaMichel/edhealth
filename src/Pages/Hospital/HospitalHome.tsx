import AcustomNavBar from "../../Component/StudentComponents/AcustomNavBar";
import SideBar from "../../Component/StudentComponents/SideBar";

const HospitalHome=()=>{
return(
<main className="row col-12 m-auto">
<AcustomNavBar/>
   <section className="col-md-3">
    <SideBar/>
    </section>
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control" name="formId1" id="formId1" placeholder=""/>
      <label>Name</label>
    </div>
    <section>
    </section>     
</main>
)}
export default HospitalHome;