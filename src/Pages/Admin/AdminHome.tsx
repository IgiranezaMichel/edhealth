import { AdminNavigationBar } from "../../Component/Admin/AdminNavigationBar"
import {useState} from 'react';
import { Location } from "./Dashboard/Location";
import { UserDashboard } from "./Dashboard/UserDashboard";
import { AdminHospitalDashboard } from "./Dashboard/AdminHospitalDashboard";
export const AdminHome=()=>{
    const [select,setSelect]=useState('user');

    return(
        <AdminNavigationBar>
            <span>
                <button onClick={()=>setSelect('user')} className={select=='user'?"bg-primary text-light fw-bold px-3 rounded-start-4":"px-2 rounded-start-4 bg-white"}>User</button>
                <button onClick={()=>setSelect('hospital')} className={select=='hospital'?"bg-primary text-light fw-bold px-3":"px-2 bg-white"}>Hospital</button>
                <button onClick={()=>setSelect('training')} className={select=='training'?"bg-primary text-light fw-bold px-3":"px-2 bg-white"}>Training</button>
                <button onClick={()=>setSelect('certificate')} className={select=='certificate'?"bg-primary text-light fw-bold px-3":"px-2 bg-white"}>Certificate</button>
                <button onClick={()=>setSelect('location')} className={select=='location'?"bg-primary text-light fw-bold px-3 rounded-end-4":"px-2 rounded-end-4 bg-white"}>Location</button>
            </span>
            <div>
                {select=='user'?<UserDashboard/>:
                select=='hospital'?<AdminHospitalDashboard/>:
                select=='location'?<Location/>:
                ''
                }
            </div>
        </AdminNavigationBar>
    )
}