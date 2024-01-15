import { useQuery } from "@apollo/client";
import { NcnmNavigationBar } from "../../Component/Ncnm/NcnmNavigationBar"
import { useState, useEffect } from 'react'
import { TRAINING_LIST_PAGINATION } from "../../GraphQl/Queries";
export const NcnmTraining = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState("isApprovedByCnm");
    const [select, setSelect] = useState('appending');
    const [trainingData, setTrainingData] = useState([]);
    const [behaviourStatus,setBehaviourStatus]=useState(false);
    const { data, loading, error } = useQuery(TRAINING_LIST_PAGINATION, {
        variables: {
            pageNumber: pageNumber, pageSize: pageSize,
            sortBy: sortBy, behaviour:select, status: behaviourStatus
        }
    });
    useEffect(() => {
        const fetchData = () => {
            try {
                if (data) {
                    setTrainingData(data.trainingListPagination.content);
                    console.log(trainingData)
                }
                if (error) console.log(error)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[pageNumber,pageSize,sortBy,behaviourStatus,select])
    return (
        <NcnmNavigationBar>
            <div className="fw-bold  display-6  bg-secondary-subtle mt-2 p-3">Available Training</div>
            <section className="col-sm-4 mb-4">
                <div className="row m-auto bg-secondary-subtle">
                    <div className="card bg-secondary-subtle col-sm-6 rounded-0" style={{ border: 'none', borderLeft: '20px solid grey' }}>
                        <i className="bi bi-hospital-fill display-1"></i>
                    </div>
                    <div className="card col-sm-6 d-flex bg-secondary-subtle justify-content-center border-0">
                        <div>Total Hospital <span className="badge bg-primary">0
                            {/* {hospitalSize.data && <>{hospitalSize.data.hospitalSize}</>} */}
                        </span></div>
                    </div>
                </div>
            </section>
            <div className="mb-3">
                <button onClick={() => setSelect('appending')} className={select == 'appending' ? "bg-primary text-light fw-bold px-3 rounded-start-4" : "px-2 rounded-start-4 bg-white"}>Appending ..</button>
                <button onClick={() => setSelect('deny')} className={select == 'deny' ? "bg-danger text-light fw-bold px-3" : "px-2 bg-white"}>Canceled</button>
                <button onClick={() => setSelect('approved')} className={select == 'approved' ? "bg-primary text-light fw-bold px-3 rounded-end-4" : "px-2 rounded-end-4 bg-white"}>Approved</button>
            </div>
            <span className='p-3  text-center' style={{ border: 'solid blue', clear: 'both', borderLeft: '25px solid blue' }}>
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
            <section>
                <div className="row mt-4">
                    {loading&&<span><div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div></span>
                    }
                    {
                        trainingData&&trainingData.map((data:any,index)=>{
                            return(
                            <div className="col-sm-3">
                            <div className="card p-0">
                                <img src={data.hospital.logo} className="card-img" />
                                <div className="card-body">
                                    <p className="card-title">
                                        {data.title}
                                    </p>
                                    <p className="card-title">
                                        <i className="bi bi-hospital-fill"></i> {data.hospital.name}
                                    </p>
                                    <p className="card-text mb-1">
                                        <i className="bi bi-geo-fill"></i> {data.location&&<span>{data.location.location.location.name}/{data.location.location.name}/{data.location.name}{data.location.name}</span>}
                                    </p>
                                    <p className="card-text mb-1">
                                        <i className="bi bi-person-fill"></i> {data.title}
                                    </p>
                                    <p className="card-text mb-1">
                                        <i className="bi bi-telephone-fill"></i> {data.title}
                                    </p>
                                    <p className="card-text mb-1">
                                        status
                                    </p>
                                    {select != 'approved' && <div className="modal-footer mb-1">
                                        <b className="text-bg-success px-1 rounded-2">Approve</b> {select == 'appending' && <span className="text-bg-danger px-1 rounded-2">Deny</span>}
                                    </div>}
                                </div>
                                <p className=" mb-0 bg-black text-light text-center">
                                    <i className="bi bi-calendar" aria-hidden="true"></i> {String(data.postDate).split('T')[0]}
                                </p>
                            </div>
                        </div>)
                        })
                    }
                </div>
            </section>
        </NcnmNavigationBar>
    )
}