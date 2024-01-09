import { HospitalNavigation } from "./HospitalNavigation"

export const HospitalUserSetting = () => {
    return (
        <HospitalNavigation>
            <h1 className="text-center"><i className="bi bi-gear-fill"></i> Settings</h1>
           <section className="row col-12 m-auto g-1"> 
           <section className="col-sm-6">
                <div className="col-md-12">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control border border-black rounded-0"/>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control border border-black rounded-0" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text border border-black">@</span>
                        <input type="text" className="form-control border border-black rounded-0"  aria-describedby="inputGroupPrepend" />
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control border border-black rounded-0"  />
                </div>
            </section>
            <section className="col-sm-6">
                <div className="col-md-12">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control border border-black rounded-0"/>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control border border-black rounded-0" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text border border-black">@</span>
                        <input type="text" className="form-control border border-black rounded-0"  aria-describedby="inputGroupPrepend" />
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control border border-black rounded-0"  />
                </div>
                <div className="modal-footer p-3">
                    <button type="button" className="btn btn-outline-primary">Update Account</button>
                </div>
            </section>
           </section>
        </HospitalNavigation>
    )
}