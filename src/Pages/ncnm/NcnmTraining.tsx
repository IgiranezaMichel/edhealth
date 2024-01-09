import { NcnmNavigationBar } from "../../Component/Ncnm/NcnmNavigationBar"
import {useState,useEffect,ChangeEvent} from 'react'
export const NcnmTraining=()=>{
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState("name");
    const [select,setSelect]=useState('appending');
    return(
        <NcnmNavigationBar>
            <div className="fw-bold  display-6  bg-secondary-subtle mt-2 p-3">Available Training</div>
            <section className="col-sm-4 mb-4">
                <div className="row m-auto bg-primary-subtle">
                    <div className="card bg-primary-subtle col-sm-6 rounded-0" style={{ border: 'none', borderLeft: '20px solid grey' }}>
                        <i className="bi bi-hospital-fill display-1"></i>
                    </div>
                    <div className="card col-sm-6 d-flex bg-primary-subtle justify-content-center border-0">
                        <div>Total Hospital <span className="badge bg-primary">0
                            {/* {hospitalSize.data && <>{hospitalSize.data.hospitalSize}</>} */}
                        </span></div>
                    </div>
                </div>
            </section>
            <div className="mb-3">
                <button onClick={()=>setSelect('appending')} className={select=='appending'?"bg-primary text-light fw-bold px-3 rounded-start-4":"px-2 rounded-start-4 bg-white"}>Appending ..</button>
                <button onClick={()=>setSelect('deny')} className={select=='deny'?"bg-danger text-light fw-bold px-3":"px-2 bg-white"}>Canceled</button>
                <button onClick={()=>setSelect('approved')} className={select=='approved'?"bg-primary text-light fw-bold px-3 rounded-end-4":"px-2 rounded-end-4 bg-white"}>Approved</button>
            </div>
            <span className='p-3  text-center' style={{ border: 'solid blue',clear:'both', borderLeft: '25px solid blue' }}>
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
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </NcnmNavigationBar>
    )
}