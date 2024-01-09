import { useEffect, useState } from "react"
import { AdminNavigationBar } from "../../Component/Admin/AdminNavigationBar"
import { AddUser_modal } from "../../Form_Modal/Admin/AddUserModal"
import { useMutation, useQuery } from "@apollo/client";
import {USER_lIST_PAGINATION } from "../../GraphQl/Queries";
import { DELETE_USER_BY_ID } from "../../GraphQl/Mutations";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
export const ManageUsers = () => {
    const [user, setUser] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState('name');
    const [userDataIndex, setUserDataIndex] = useState(-1);
    const navigation = useNavigate();
    const { data, loading, error } = useQuery(USER_lIST_PAGINATION, {
        variables: {
            pageNumber: pageNumber, pageSize: pageSize, sortBy: sortBy
        },
        fetchPolicy: 'no-cache'
    });
    const [deleteUserById, deleteResult] = useMutation(DELETE_USER_BY_ID);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!loading && !error) {
                    setUser(data.useListPagination.content);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [data, loading, error, pageNumber, pageSize, sortBy]);
    const nextPage = () => {
        if (pageNumber + 1 != data.useListPagination.pageSize) {
            setPageNumber(pageNumber + 1);
        }
    }
    const prevPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);

        }
    }
    const deleteUser = () => {
        const userData: any = user[userDataIndex];
        deleteUserById({
            variables: { input: userData.id }
        });
        if (deleteResult.data) {
            console.log(deleteResult.data);
        }
        if (deleteResult.error) {
            console.log(deleteResult.error);
        }
    }
    const closeModal = () => {
        navigation({ pathname: "/admin/users" })
    }
    const deleteUser_Model = () => {
        const userData: any = user[userDataIndex];
        console.log(userData)
        return (
            <>
                {
                    userDataIndex != -1 && <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header bg-danger-subtle ">
                                    <h5 className="modal-title" id="staticBackdropLabel text-black fw-bold">Delete {userData.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <span className="d-block text-center fs-4 fw-bold"><i className="bi bi-person-fill"></i> {userData.name}</span>
                                    <div className="row container m-auto">
                                        <div className="card col-sm-3 p-0 rounded-0 border-0">
                                            <img src={userData.profilePicture} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card col-sm-9 rounded-0 border-0">
                                            {userData.gender == 'Male' ?
                                                <div className="mb-3">
                                                    <i className="bi bi-gender-male"></i> {userData.gender}
                                                </div>
                                                : <div className="mb-3">
                                                    <i className="bi bi-gender-female"></i> {userData.gender}
                                                </div>}
                                            <p className="card-text mb-3"><i className="bi bi-calendar"></i> {userData.dob}</p>
                                            <p className="card-text mb-3"><i className="bi bi-telephone-fill"></i> {userData.phoneNumber}</p>
                                            <p className="card-text mb-3"><i className="bi bi-envelope"></i> {userData.dob}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success fw-bold" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                                    <button type="button" className="btn btn-danger fw-bold" onClick={deleteUser}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
    return (
        <AdminNavigationBar>
            <div className="fw-bold  display-6  bg-primary-subtle mt-2 p-3">Manage System Users</div>
            <section className="col-sm-4 ">
                <div className="row m-auto bg-primary-subtle">
                    <div className="card bg-primary-subtle col-sm-6 rounded-0" style={{ border: 'none', borderLeft: '20px solid rgb(105,20,60)' }}>
                        <i className="bi bi-people-fill display-1"></i>
                    </div>
                    <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                        <div>Total User <span className="badge bg-primary">
                            {data && <>{data.useListPagination.size}</>}
                        </span>
                        </div>
                    </div>
                </div>
            </section>
            <i className="bi bi-plus-circle-fill fs-3" data-bs-toggle="modal" data-bs-target="#add-user"></i>
            {
                loading ?
                    <main className="text-center py-5">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </main>
                    : <div className="table-responsive p-2 rounded-2 border border-dark mt-4" >
                        <table className="table table-white table-borderless">
                            <thead>
                                <tr>
                                    <th colSpan={4} className="table-primary">
                                        <div className="float-end">
                                            <span>Sort By</span>
                                            <select onChange={e => setSortBy(e.currentTarget.value)} className="py-1 mx-2" aria-label="Default select example">
                                                <option value={'name'} selected={sortBy == 'name' ? true : false}>Name</option>
                                                <option value={'email'} selected={sortBy == 'email' ? true : false}>Email</option>
                                                <option value={'dob'} selected={sortBy == 'dob' ? true : false}>Date of birth</option>
                                                <option value={'gender'} selected={sortBy == 'gender' ? true : false}>Gender</option>
                                                <option value={'role'} selected={sortBy == 'role' ? true : false}>Order By Role</option>
                                            </select>
                                            <span>Page Size</span>
                                            <select onChange={e => setPageSize(Number(e.currentTarget.value))} className="py-1 mx-2" aria-label="Default select example">
                                                <option value={5} selected={pageSize == 5 ? true : false}>5</option>
                                                <option value="10" selected={pageSize == 10 ? true : false}>10</option>
                                                <option value="15" selected={pageSize == 15 ? true : false}>15</option>
                                                <option value="20" selected={pageSize == 20 ? true : false}>20</option>
                                            </select>
                                            <span>
                                                <input type="text" className="p-1" placeholder="Search ..." />
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="table-primary">
                                    <th scope="col">#</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Contact Detail</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((data: any, index) => {
                                        return (
                                            <motion.tr
                                                initial={{ visibility: 'hidden' }} whileInView={{ visibility: 'visible' }} viewport={{ amount: .5, once: false }}
                                                transition={{ delay: .1 * index, ease: 'linear' }}
                                                key={index} className="">
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="col-sm-12 row">
                                                        <div className="card col-sm-3 p-0 border-0">
                                                            <img className="card-img-top" src={data.profilePicture} alt="Title" />
                                                        </div>
                                                        <div className="card col-sm-9 p-0 border-0">
                                                            <div className="card-body">
                                                                <h5 className="card-title bi bi-person-fill">{data.name}</h5>
                                                                {data.gender == 'Male' ? <div className="mb-2"><i className="bi bi-gender-male"></i> {data.gender}</div>
                                                                    : <div className="mb-2"><i className="bi bi-gender-female-fill"></i> {data.gender}</div>}
                                                                <p className="card-text"><i className="bi bi-calendar-fill"></i> {String(data.dob).split('T')[0]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="col-sm-5">
                                                    <div className="mb-2"><i className="bi bi-telephone-fill"></i> {data.phoneNumber}</div>
                                                    <div className="mb-2"><i className="bi bi-envelope-fill"></i> {data.email}</div>
                                                    <div className="mb-2">
                                                        {data.role == 'ROLE_HOSPITAL' ? <div><i className="bi bi-lock-fill"></i>Hospital Admin</div>
                                                            : data.role == 'ROLE_NCNM' ? <div><i className="bi bi-lock-fill"></i>Public Admin</div>
                                                                : data.role == 'ROLE_SCHOOL' ? <div><i className="bi bi-lock-fill"></i>School Admin</div>
                                                                    : data.role == 'ROLE_NCNM' ? <div><i className="bi bi-lock-fill"></i>Public Admin</div>
                                                                        : <></>
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <i className="bi bi-trash" onClick={() => setUserDataIndex(index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i> <i className="bi bi-check bg-success text-light px-1"></i>
                                                </td>
                                            </motion.tr>)
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr className="table-borderless">
                                    <td colSpan={3}>
                                        <div className="float-end">
                                            <nav aria-label="Page navigation">
                                                <ul
                                                    className="pagination">
                                                    <li className="page-item border-0" aria-current="page">
                                                        <a className="page-link">{data.useListPagination.pageNumber + 1} page out of {data.useListPagination.pageSize}</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <button onClick={prevPage} className="page-link" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </button>
                                                    </li>

                                                    <li className="page-item">
                                                        <button className="page-link" aria-label="Next" onClick={nextPage}>
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
            }
            {AddUser_modal()}
            {deleteUser_Model()}
        </AdminNavigationBar>
    )
}