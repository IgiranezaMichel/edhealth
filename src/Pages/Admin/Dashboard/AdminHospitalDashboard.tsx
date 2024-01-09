import { useQuery } from '@apollo/client'
import {useEffect,useState} from 'react'
import {HOSPITAL_lIST_PAGINATION } from '../../../GraphQl/Queries'
import { Link } from 'react-router-dom';
export const AdminHospitalDashboard=()=>{
    const [hospital,setHospital]=useState([]);
    const {data,loading,error}=useQuery(HOSPITAL_lIST_PAGINATION,{
        variables: {
            pageNumber: 0, pageSize: 5, sortBy: "name"
        },
        fetchPolicy:'no-cache'
    })
    useEffect(()=>{
        const fetch=async()=>{
           try{
            setHospital(data.hospitaListPagination.content);
           }catch(err){
            console.log(err)
           }
        }
        fetch().catch(err=>err);
    },[data,error])
    return(
        <main>
            <div className="fw-bold  display-6  bg-primary-subtle mt-2 p-3"> Hospital Dashboard</div>
            <section className="col-sm-4 ">
                    <div className="row m-auto bg-primary-subtle">
                        <div className="card bg-primary-subtle col-sm-6 rounded-0" style={{border:'none',borderLeft:'20px solid grey'}}>
                            <i className="bi bi-house-fill display-1"></i>
                        </div>
                        <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                            <div>Total Hospital <span className="badge bg-primary">
                            {data&&<>{data.hospitaListPagination.size}</>}    
                            </span></div>
                        </div>
                    </div>
            </section>
            <section className="row container m-auto">
            <section className="card col-sm-8 rounded-0">
                <span className="fw-bold fs-4">Rate of Registed Hospital</span>
            </section>
            <section className="card col-sm-4 rounded-0">
                <span className="fw-bold fs-5">Recent Registed Hospital</span>
                <div className="text-bg-info rounded-2 p-1 fw-bold">Name</div>
                <div>
                    {
                        loading ?
                            <div className="spinner-grow text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            :
                            hospital.map((data: any, index) => {
                                return (
                                    <div key={index} className="mb-2">{data.name} <span className="float-end mt-2"></span></div>
                                )
                            })
                    }
                    <Link to={'/admin/users'} className="nav-link active text-success">more</Link>
                </div>
            </section>
            </section>
        </main>
    )
}