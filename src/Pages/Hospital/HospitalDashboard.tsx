import { HospitalNavigation } from "./HospitalNavigation"

export const HospitalDashboard = () => {
    return (
        <HospitalNavigation>
            <section className="display-6 fw-bold text-center p-3">[Hospital Name] Dashboard</section>
            <div className="row col-12 m-auto g-1">
                <section className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Appending Training</h5>
                            <p className="card-text">wrrite sthing</p>
                            b5
                        </div>
                    </div>
                </section>
                <section className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Appending Jobs</h5>
                            <p className="card-text">wrrite sthing</p>
                            b5
                        </div>
                    </div>
                </section>
                <section className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Appending Certificate</h5>
                            <p className="card-text">wrrite sthing</p>
                            b5
                        </div>
                    </div>
                </section>
            </div>
        </HospitalNavigation>
    )
}