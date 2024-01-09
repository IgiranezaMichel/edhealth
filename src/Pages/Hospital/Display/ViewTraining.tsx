import { HospitalNavigation } from "../HospitalNavigation"

export const ViewTraining=()=>{
    return(
        <HospitalNavigation>
            <span className="text-center fw-bold d-block display-6">Training</span>
        <section className="row col-12 m-auto g-2">
            <section className="col-sm-6">
                <div className="card p-0">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top rounded-0" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    b5
                  </div>
                </div>
            </section>
            <section className="col-sm-6">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    b5
                  </div>
                </div>
            </section>
        </section>
        </HospitalNavigation>
    )
}