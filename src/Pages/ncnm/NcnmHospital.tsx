import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState, ChangeEvent } from 'react'
import {HOSPITAL_lIST_PAGINATION } from '../../GraphQl/Queries';
import { SAVE_HOSPITAL } from '../../GraphQl/Mutations';
import { toast, ToastContainer } from 'react-toastify'
import {motion} from 'framer-motion'
import { NcnmNavigationBar } from '../../Component/Ncnm/NcnmNavigationBar';
export const NcnmHospital = () => {
    const [hospital, setHospital] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState("name");
    const { data, loading, error } = useQuery(HOSPITAL_lIST_PAGINATION, {
        variables: {
            pageNumber: pageNumber, pageSize: pageSize, sortBy: sortBy
        },
        fetchPolicy: 'no-cache'
    });
    const [saveHospital] = useMutation(SAVE_HOSPITAL);
    const [isSaved, setIsSaved] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            try {
                setHospital(data.hospitaListPagination.content);
            } catch (err) {
                console.log(err)
            }
        }
        fetch().catch(err => err);
    }, [data, error, pageSize, pageNumber])
    const createHospital = async () => {
        const inputHospital = {
            id: id,
            name: name,
            logo: logo
        }
        await saveHospital({
            variables: { input: inputHospital }
        }).then(
            data => { toast(data.data.saveHospital.name + ' Saved Successfully'); setIsSaved(!isSaved) }

        ).catch(
            error => console.log(error)
        );
    }
    const imgHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result as string;
                console.log(file.size / (1024 * 1024))
                if (file.size / (1024 * 1024) > 1)
                    toast.error('Your file is much larger 1MB please add file which is under 1MB')
                else
                    setLogo(base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    const nextPage = () => {
        if ((pageNumber + 1) < data.hospitaListPagination.pageSize) {
            setPageNumber(pageNumber + 1);
        }
    }
    const prevPage = () => {
        if ((pageNumber - 1) > -1) {
            setPageNumber(pageNumber - 1);
        }
    }
    const add_Hospital_Modal = <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add new hospital</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='mb-2'>
                        <span className='fw-bold'>Hospital Name</span>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <span className='fw-bold'>Logo</span>
                        <input type="file" onChange={imgHandler} className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <span className='fw-bold'>Select Province</span>
                        <div className="mb-3">
                            <select className="form-select border rounded-0 border-dark" aria-label="Default select example">
                                <option selected>Select Province</option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={createHospital}>Save</button>
                </div>
            </div>
        </div>
    </div>;
    return (
        <NcnmNavigationBar>
            <div className="fw-bold  display-6  bg-secondary-subtle mt-2 p-3">Manage Hospital</div>
            <section className="col-sm-4 ">
                <div className="row m-auto bg-secondary-subtle">
                    <div className="card bg-secondary-subtle col-sm-6 rounded-0" style={{ border: 'none', borderLeft: '20px solid grey' }}>
                        <i className="bi bi-hospital-fill display-1"></i>
                    </div>
                    <div className="card col-sm-6 d-flex bg-secondary-subtle justify-content-center border-0">
                        <div>Total Hospital <span className="badge bg-primary">
                            {data && <>{data.hospitaListPagination.size}</>}
                        </span></div>
                    </div>
                </div>
            </section>
            <i className='bi bi-plus-circle-fill fs-4 mt-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
            {
                loading ?
                    <div className='text-center p-4 mt-5'>
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className='row m-auto col-12 '>
                        {
                            hospital.length > 0 && <div className='mt-2 mb-2'>
                                <span className='p-3 text-center float-end' style={{ border: 'solid blue', borderLeft: '25px solid blue' }}>
                                    <span>
                                        page Size
                                        <select onChange={e => setPageSize(Number(e.target.value))} className="rounded-circle py-2 bg-info" aria-label="Default select example">
                                            <option value={5} selected={pageSize == 5 ? true : false}>5</option>
                                            <option value="10" selected={pageSize == 10 ? true : false}>10</option>
                                            <option value="15" selected={pageSize == 15 ? true : false}>15</option>
                                            <option value="20" selected={pageSize == 20 ? true : false}>20</option>
                                        </select>
                                    </span>

                                    <span className='mx-4'>
                                        Sort By
                                        <select onChange={e => setSortBy(e.target.value)} className="bg-warning fw-bold" aria-label="Default select example">
                                            <option value={'name'} selected={sortBy == 'name' ? true : false}>Name</option>
                                            <option value={'createdOn'} selected={sortBy == 'createdOn' ? true : false}>Date of Creation</option>
                                        </select>
                                    </span>
                                </span>
                            </div>
                        }{
                            hospital.map((data: any, index) => {
                                return (
                                    <motion.div
                                    initial={{visibility:'hidden'}} whileInView={{visibility:'visible'}} viewport={{amount:.5,once:false}}
                                     transition={{delay:.1*index,ease:'linear'}}
                                     key={index} className="row border p-1 border-info-subtle border-2 p-2 rounded-3 mb-3">
                                        <div className="col-sm-2">
                                            <div className="card border-0">
                                                <img src={data.logo} className='card-img' />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className='fw-bold mb-3'>
                                                        <i className='bi bi-hospital-fill'></i> {data.name}
                                                    </div>
                                                    <p className="card-text">
                                                        <i className='bi bi-geo-fill'></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <i className='bi bi-person-fill'></i>
                                                    </h3>
                                                    <p className="card-text">
                                                        <i className='bi bi-envelope'></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <span>
                                                <i className='bi bi-calendar'></i> {String(data.createdOn).split('T')[0]}
                                            </span>
                                            <span className='float-end'>
                                                <span className='fw-bolder text-bg-secondary p-1 rounded-4 mx-3'>
                                                    Add Role
                                                </span>
                                                <span className='fw-bolder text-bg-warning p-1 rounded-4'>
                                                    View Training
                                                </span>
                                                <span className='mx-3 fw-bolder text-bg-primary p-1 rounded-4'>
                                                    View Certificate
                                                </span>
                                                <span className='fw-bolder text-bg-success p-1 rounded-4'>
                                                    View Jobs
                                                </span>
                                            </span>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }{
                            hospital.length > 0 && <nav aria-label="Page navigation example">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active">
                                        {
                                            <> {data.hospitaListPagination.pageNumber + 1} out of {data.hospitaListPagination.pageSize}</>
                                        }
                                    </li>
                                    <li className="page-item" onClick={prevPage}>
                                        <button className="page-link" aria-label="Previous">
                                            <span aria-hidden="true">Prev</span>
                                        </button>
                                    </li>

                                    <li className="page-item" onClick={nextPage}>
                                        <button className="page-link" aria-label="Next">
                                            <span aria-hidden="true">Next</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </div>
            }{
                hospital.length == 0 && <div className='mt-5'>
                    <span className='p-3 mt-5 text-center' style={{ border: 'solid blue', borderLeft: '25px solid blue' }}>No Recorded hospital</span>
                </div>
            }
            {add_Hospital_Modal}
            <ToastContainer />
        </NcnmNavigationBar>
    )
}