import { Link } from "react-router-dom"
import { SchoolNavigation } from "../../Component/School/SchoolNavigation"

export const SchoolHome = () => {
    return (
        <SchoolNavigation>
            <div className="table-responsive-md rounded-5 bg-light mb-5 border border-dark p-3">
                <table className="table table-light border-0">
                    <thead>
                        <tr>
                            <th scope="col" className="p-3" colSpan={5}>Student Registered</th>
                            <th scope="col">
                                <div className="float-end p-3">
                                    <input type="text" placeholder="search .." />
                                    <button>
                                        <i className="bi bi-search" />
                                    </button>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">National Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td scope="row">Item</td>
                            <td>Item</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*  */}
            <div className="card border border-black bg-light">
                <div className="card-body">
                    <h5 className="card-title fw-bold">View Academic Records</h5>
                    <section className="row col-sm-10 m-auto">
                        <div className="float-end p-3">
                            <input className="rounded border-secondary float-end" type="text" placeholder="search .." />
                        </div>
                        <section className="col-sm-6">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" />
                                <label>Anual Report Marks</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" />
                                <label>User Marks</label>
                            </div>
                        </section>
                        <section className="col-sm-6">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" />
                                <label>Anual Description Marks</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" />
                                <label>School Id</label>
                            </div>
                        </section>
                        <section className="text-center">
                            <button className="fw-bolder fs-5 text-light border-0 ro" style={{ backgroundColor: '#93499F' }}>REGISTER</button>
                            <Link to={'/'} className="fw-bolder mx-3" style={{ color: '#93499F', textDecoration: 'none' }}>View Registered</Link>
                        </section>
                    </section>
                </div>
            </div>
        </SchoolNavigation>
    )
}