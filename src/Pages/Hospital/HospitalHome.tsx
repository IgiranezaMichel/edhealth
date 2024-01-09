import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { SAVE_TRAINING } from "../../GraphQl/Mutations";
import { FIND_TRAINING_BY_ID, TRAINING_LIST_PAGINATION } from "../../GraphQl/Queries";
import { HospitalNavigation } from "./HospitalNavigation";
import { Link } from "react-router-dom";

export const HospitalHome = () => {

    return (
        <HospitalNavigation >
            {Training()}
            {Job()}
            {Certificate()}
            <ToastContainer />
        </HospitalNavigation>
    )
}
function Training() {
    const [trainingTitle, setTrainingTitle] = useState('');
    const [trainingDescription, setTrainingDescription] = useState('');
    const [trainer, setTrainer] = useState('');
    const [trainingDeadline, setTrainingDeadline] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(0);
    const [sortBy, setSortBy] = useState('');
    const [behaviour, setBehaviour] = useState('appending');
    const [status, setStatus] = useState(false);
    const [saveTraining] = useMutation(SAVE_TRAINING);
    const {data}=useQuery(TRAINING_LIST_PAGINATION,{
        variables:{
            pageNumber:pageNumber,pageSize:pageSize,sortBy:sortBy,behaviour:behaviour,status:status
        }
    })
    const findTrainingByIdResult = useQuery(FIND_TRAINING_BY_ID, {
        variables: {
            id: 2
        }
    });
    useEffect(() => {
        findTrainingByIdResult
        if(data)
        console.log(data)
    }, [2])
    console.log(findTrainingByIdResult.data)
    const submitTrainingForm = async() => {
        const inputTraining={
            id: 0,
            title:trainingTitle,
            description:trainingDescription,
            deadline:trainingDeadline,
            trainers:trainer,
            hospitalId:1
        }
      await  saveTraining({
            variables: {
                input:inputTraining
            }
        }).then((data)=>toast(data.data.saveTraining.title+ ' Training saved successfully')).catch(err=>console.log(err))
        .catch(err=>toast(err+ ''))
    }
    return (
        <div className="card px-3 py-3 mt-3">
            <span className="fw-bolder fs-4 text-uppercase">Publish Training</span>
            <div className="col-md-12 m-auto g-3 row">
                <div className="col-md-3">
                    <span className="fw-bold">Title</span>
                    <input type="text" className="form-control border border-dark" value={trainingTitle} onChange={e => setTrainingTitle(e.target.value)} />
                </div>
                <div className="mb-3 col-md-3">
                    <span className="fw-bold">Description</span>
                    <div className="mb-3">
                        <textarea className="form-control border border-dark" value={trainingDescription} onChange={e => setTrainingDescription(e.target.value)} rows={2}></textarea>
                    </div>
                </div>
                <div className="mb-3 col-md-3">
                    <span className="fw-bold">Trainers</span>
                    <div className="mb-3">
                        <textarea  className="form-control border border-dark" value={trainer} onChange={e => setTrainer(e.target.value)} rows={2}></textarea>
                    </div>
                </div>
                <div className="mb-3 col-md-3">
                    <span className="fw-bold">Deadline</span>
                    <input type="datetime-local" value={trainingDeadline} onChange={e => setTrainingDeadline(e.target.value)} className="form-control border border-dark" />
                </div>
            </div>
            <button onClick={submitTrainingForm} className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>
                Register
            </button>
            <div>
                <Link to={'/hospital/training'} className="fw-bolder nav-link" style={{ float: 'right', color: '#49579F' }}>View Trainings</Link>
            </div>
        </div>
    )
}
function Certificate() {
    return<div className="card px-3 py-3 mt-3">
    <span className="fw-bolder fs-4 text-uppercase">Publish Certificate</span>
    <div className="col-md-12 m-auto g-3 row">
        <div className="col-md-3">
            <span className="fw-bold">Title</span>
            <input type="text" className="form-control border border-dark" />
        </div>
        <div className="mb-3 col-md-3">
            <span className="fw-bold">Deescription</span>
            <div className="mb-3">
                <textarea className="form-control border border-dark"  rows={2}></textarea>
            </div>
        </div>
        <div className="mb-3 col-md-3">
            <span className="fw-bold">Deadline</span>
            <input type="datetime-local" className="form-control border border-dark" />
        </div>
    </div>
    <button  className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>
        Register
    </button>
    <div>
        <Link to={'/hospital/certificate'} className="fw-bolder nav-link" style={{ float: 'right', color: '#49579F' }}>View Certificate</Link>
    </div>
</div>;
}
function Job() {
    return <div className="card px-3 py-3 mt-3">
    <span className="fw-bolder fs-4 text-uppercase">Publish Job</span>
    <div className="col-md-12 m-auto g-3 row">
        <div className="col-md-3">
            <span className="fw-bold">Title</span>
            <input type="text" className="form-control border border-dark" />
        </div>
        <div className="mb-3 col-md-3">
            <span className="fw-bold">Description</span>
            <div className="mb-3">
                <textarea className="form-control border border-dark"  rows={2}></textarea>
            </div>
        </div>
        <div className="mb-3 col-md-3">
            <span className="fw-bold">Deadline</span>
            <input type="datetime-local" className="form-control border border-dark" />
        </div>
    </div>
    <button  className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>
        Register
    </button>
    <div>
        <Link to={'/hospital/certificate'} className="fw-bolder nav-link" style={{ float: 'right', color: '#49579F' }}>View Jobs</Link>
    </div>
</div>;
}
