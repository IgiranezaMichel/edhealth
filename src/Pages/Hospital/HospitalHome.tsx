import { useMutation, useQuery } from "@apollo/client";
import AcustomNavBar from "../../Component/StudentComponents/AcustomNavBar";
import SideBar from "../../Component/StudentComponents/SideBar";
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { SAVE_TRAINING } from "../../GraphQl/Mutations";
import { FIND_TRAINING_BY_ID } from "../../GraphQl/Queries";
const HospitalHome = () => {
    const [trainingTitle, setTrainingTitle] = useState('');
    const [trainingDescription, setTrainingDescription] = useState('');
    const [trainingDeadline, setTrainingDeadline] = useState('');
    const [saveTraining, TrainingResult] = useMutation(SAVE_TRAINING);

    const findTrainingByIdResult = useQuery(FIND_TRAINING_BY_ID, {
        variables: {
            id: 2
        }
    });
    useEffect(() => {
        findTrainingByIdResult
    }, [2])
    console.log(findTrainingByIdResult.data)
    const submitTrainingForm = () => {
        const inputTraining: inputTraining = {
            id: 0,
            title: trainingTitle,
            deadline: trainingDeadline,
            description: trainingDescription,
            name: ''
        }
        saveTraining({
            variables: {
                input: inputTraining
            }
        })
        if (TrainingResult.data) {
            toast('Training saved successfully')
        }
        if (TrainingResult.error) {
            toast(TrainingResult.error + '')
        }
    }
    return (
        <main >
            <ToastContainer />
            <div className="sticky-top">
                <AcustomNavBar institutionName="Hospital Name" />
            </div>
            <section className="row col-12 m-auto  mt-5 overflow-auto">
                <section className="col-md-3 overflow-auto" >
                    <SideBar class="text-info fw-bolder" />
                </section>
                {trainingRecords()}
            </section>
        </main>
    )

    function trainingRecords() {
        return <section className="col-md-9 overflow-auto">
            <div className="card px-3 py-3 mt-3">
                <span className="fw-bolder fs-4 text-uppercase">Publish Training</span>
                <div className="col-md-12 m-auto g-3 row">
                    <div className="form-floating mb-3 col-md-4">
                        <input type="text" className="form-control" value={trainingTitle} onChange={e => setTrainingTitle(e.target.value)} />
                        <label className="fw-bolder">Title</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <div className="mb-3">
                            <textarea className="form-control" value={trainingDescription} onChange={e => setTrainingDescription(e.target.value)} rows={2}></textarea>
                        </div>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <input type="datetime-local" value={trainingDeadline} onChange={e => setTrainingDeadline(e.target.value)} className="form-control" />
                        <label className="fw-bolder">Deadline</label>
                    </div>
                </div>
                <button onClick={submitTrainingForm} className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>
                    Register
                </button>
                <div>
                    <span className="" style={{ float: 'right', color: '#49579F' }}>View Trainings</span>
                </div>
            </div>
            {/*  */}
            <div className="card px-3 py-3 mt-3">
                <span className="fw-bolder fs-4 text-uppercase">Publish Jobs</span>
                <div className="col-md-12 m-auto g-3 row">
                    <div className="form-floating mb-3 col-md-4">
                        <input type="text" className="form-control" />
                        <label className="fw-bolder">Title</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <div className="mb-3">
                            <textarea className="form-control" name="" placeholder="Discription ....." id="" rows={2}></textarea>
                        </div>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <input type="date" className="form-control" />
                        <label className="fw-bolder">Deadline</label>
                    </div>
                </div>
                <button className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>

                </button>
                <div>
                    <span className="" style={{ float: 'right', color: '#49579F' }}>View Trainings</span>
                </div>
            </div>
            {/*  */}
            <div className="card px-3 py-3 mt-3">
                <span className="fw-bolder fs-4 text-uppercase">Add Certificate</span>
                <div className="col-md-12 m-auto g-3 row">
                    <div className="form-floating mb-3 col-md-4">
                        <input type="text" className="form-control" />
                        <label className="fw-bolder">Title</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <div className="mb-3">
                            <textarea className="form-control" name="" placeholder="Discription ....." id="" rows={2}></textarea>
                        </div>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                        <input type="date" className="form-control" />
                        <label className="fw-bolder">Deadline</label>
                    </div>
                </div>
                <button className="text-uppercase btn w-25 d-block align-self-center text-white fw-bolder" style={{ backgroundColor: '#49579F' }}>Register</button>
                <div>
                    <span className="" style={{ float: 'right', color: '#49579F' }}>View Trainings</span>
                </div>
            </div>
        </section>;
    }
}
export default HospitalHome;