import AcustomNavBar from "../../Component/StudentComponents/AcustomNavBar";

const HospitalHome=()=>{
return(
<main className="row col-12 m-auto">
   <section>
        <AcustomNavBar/>
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