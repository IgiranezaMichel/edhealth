import {ToastContainer, toast} from 'react-toastify'
import { NcnmNavigationBar } from "../../Component/Ncnm/NcnmNavigationBar";
const NcnmHome=()=>{
const click=()=>{
    toast('Clicked')
}
return(
<>
<NcnmNavigationBar>
    <section className="col-md-7 m-auto">
        <div className="table-responsive">
            <table className="table table-white border">
            <thead className="table-white">
                <tr className="table-white">
                    <td colSpan={3} className="display-6 fw-bolder">Student Certificates</td>
                    <td colSpan={2}>
                        <div>
                          <input type="text"
                              className="w-75 rounded-4" style={{boxShadow:'2px 4 px blue'}} name="" id="" aria-describedby="helpId" placeholder="Search ..."/>
                              <button onClick={click} type="button" className="btn rounded-circle bg-dark text-white m-2 py-2"><i className="bi bi-search" aria-hidden="true"></i></button>
                        </div>
                    </td>
                </tr>
                <tr className="table-secondary">
                    <th>Training</th>
                    <th>User</th>
                    <th>Received Date</th>
                    <th>Expiration Date</th>
                    <th>Payment</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                        <td scope="row">Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</NcnmNavigationBar>
<ToastContainer/>
</>
)
}
export default NcnmHome;