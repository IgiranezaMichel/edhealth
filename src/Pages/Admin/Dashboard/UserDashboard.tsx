import { useEffect, useState } from "react"
import {USER_lIST_PAGINATION } from "../../../GraphQl/Queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const UserDashboard = () => {
    const [user, setUser] = useState([]);
    const { data, loading } = useQuery(USER_lIST_PAGINATION, {
        variables: {
            pageNumber: 0, pageSize: 5, sortBy: "dob"
        }
    });
    useEffect(() => {
        const fetch = async () => {
            setUser(data.useListPagination.content)
        }
        fetch();
    })
    return (
        <main>
            <div className="fw-bold  display-6  bg-primary-subtle mt-2 p-3"> User Dashboard</div>
            <section className="row col-sm-12 m-auto">
                <section className="col-sm-4 ">
                    <div className="row m-auto bg-primary-subtle">
                        <div className="card bg-primary-subtle col-sm-6 border-0">
                            <i className="bi bi-people-fill display-1"></i>
                        </div>
                        <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                            <div>Total User <span className="badge bg-primary">
                                {data && <>{data.useListPagination.size}</>}
                                </span></div>
                        </div>
                    </div>
                </section>
                <section className="col-sm-4 ">
                    <div className="row m-auto bg-primary-subtle">
                        <div className="card bg-primary-subtle col-sm-6 border-0">
                            <i className="bi bi-people-fill display-1"></i>
                        </div>
                        <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                            <div>Total Student <span className="badge bg-primary">New!</span></div>
                        </div>
                    </div>
                </section>
                <section className="col-sm-4 ">
                    <div className="row m-auto bg-primary-subtle">
                        <div className="card bg-primary-subtle col-sm-6 border-0">
                            <i className="bi bi-people-fill display-1"></i>
                        </div>
                        <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                            <div>Total Others <span className="badge bg-primary">New!</span></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="row col-12 m-auto">
                <div className="card col-sm-8 rounded-0 ">
                    <span className="fw-bold">Rate of Anual Registration</span>
                </div>
                <div className="card col-sm-4 rounded-0 ">
                    <span className="fw-bold fs-5">Recent Registered users</span>
                    <div className="text-bg-info rounded-2 p-1 fw-bold">Name</div>
                    {
                        loading ?
                            <div className="spinner-grow text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            :
                            user.map((data: any, index) => {
                                return (
                                    <div key={index} className="mb-2">{data.name} <span className="float-end mt-2">{data.dob.split('T')[0]}</span></div>
                                )
                            })
                    }
                    <Link to={'/admin/users'} className="nav-link active text-success">more</Link>
                </div>
            </section>
        </main>
    )
}