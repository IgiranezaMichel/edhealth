import { NcnmNavigationBar } from "../../Component/Ncnm/NcnmNavigationBar"
import { useMutation, useQuery } from "@apollo/client";
import {useState,useEffect,ChangeEvent} from 'react'
import { SCHOOL_SIZE, SCHOOL_lIST_PAGINATION } from "../../GraphQl/Queries";
import {motion} from 'framer-motion'
import { ToastContainer,toast } from "react-toastify";
import { SAVE_SCHOOL } from "../../GraphQl/Mutations";
export const NcnmSchools=()=>{
    const [school, setSchool] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState("name");
    const schoolSize=useQuery(SCHOOL_SIZE);
    const {data,loading}=useQuery(SCHOOL_lIST_PAGINATION,{
        variables: {
            pageNumber: pageNumber, pageSize: pageSize, sortBy: sortBy
        },
        fetchPolicy: 'no-cache'
    })
    const [saveSchool] = useMutation(SAVE_SCHOOL);
    useEffect(()=>{
     const fetch=async()=>{
       setSchool(data.schoolListPagination.content);
     }   
     fetch();
    },[data,sortBy,pageNumber,pageSize]);
    const nextPage = () => {
        if ((pageNumber + 1) < data.schoolListPagination.pageSize) {
            setPageNumber(pageNumber + 1);
        }
        console.log(pageNumber)
    }
    const prevPage = () => {
        if ((pageNumber - 1) > -1) {
            setPageNumber(pageNumber - 1);
        }
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
    const createHospital = async () => {
        const inputSchool = {
            id: id,
            name: name,
            logo: logo
        }
        await saveSchool({
            variables: { input: inputSchool}
        }).then(
            data => { toast(data.data.saveSchool.name + ' Saved Successfully');}

        ).catch(
            error => console.log(error)
        );
    }
    return(
        <NcnmNavigationBar>
 <div className="fw-bold  display-6  bg-primary-subtle mt-2 p-3">Ncnm Schools</div>
            <section className="col-sm-4 ">
                <div className="row m-auto bg-primary-subtle">
                    <div className="card bg-primary-subtle col-sm-6 rounded-0" style={{ border: 'none', borderLeft: '20px solid rgb(25,54,60)' }}>
                        <i className="bi bi-houses-fill display-1"></i>
                    </div>
                    <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                        <div>Total School <span className="badge bg-primary">
                        {schoolSize.data && <>{schoolSize.data.schoolSize}</>}
                        </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-4">
                <i className="bi bi-plus-circle-fill fs-2" data-bs-toggle="modal" data-bs-target="#school_Modal"></i>
            </div>
            {
                loading ?
                    <div className='text-center p-4 mt-5'>
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className='row m-auto col-12 '>
                        {
                            school.length > 0 && <div className='mt-2 mb-2'>
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
                            school.map((data: any, index) => {
                                return (
                                    <motion.div
                                    initial={{visibility:'hidden'}} whileInView={{visibility:'visible'}} viewport={{amount:.5,once:false}}
                                     transition={{delay:.1*index,ease:'linear'}}
                                     key={index} className="row border p-1 border-info-subtle border-2 p-2 rounded-3 mb-3">
                                        <div className="col-sm-2">
                                            <div className="card border-0">
                                                <img src={data.logo} className='card-img' />
                                            </div>
                                            <div className="card-img-overlay">
                                                <span className="badge border border-white bg-primary">{index+1}</span>
                                                
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className='fw-bold mb-1'>
                                                        <i className='bi bi-school-fill'></i> {data.name}
                                                    </div>
                                                    <p className="card-text mb-2">
                                                        <i className='bi bi-house-fill'></i>
                                                    </p>
                                                    <p className="card-text mb-2">
                                                        <i className='bi bi-geo-fill'></i>
                                                    </p>
                                                    <p className="card-text mb-2">
                                                        <i className='bi bi-people-fill'></i> Students <span  className="badge bg-primary">New</span>
                                                        
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
                                                <span className='fw-bolder text-bg-info p-1 px-2 rounded-4 mx-3'>
                                                    View Student
                                                </span>
                                                <span className='fw-bolder text-bg-danger p-1 px-2 rounded-4'>
                                                    Delete
                                                </span>
                                                <span className='mx-3 fw-bolder text-bg-success p-1 px-2 rounded-4'>
                                                    Update
                                                </span>
                                                <span className='fw-bolder text-bg-primary p-1 px-2 rounded-4'>
                                                Add Role
                                                </span>
                                            </span>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }{
                            school.length > 0 && <nav aria-label="Page navigation example">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active">
                                        {
                                            <> {data.schoolListPagination.pageNumber + 1} out of {data.schoolListPagination.pageSize}</>
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
                school.length == 0 && <div className='mt-5'>
                    <span className='p-3 mt-5 text-center' style={{ border: 'solid blue', borderLeft: '25px solid blue' }}>No Record found</span>
                </div>
            }
            <ToastContainer />
        </NcnmNavigationBar>
    )
}