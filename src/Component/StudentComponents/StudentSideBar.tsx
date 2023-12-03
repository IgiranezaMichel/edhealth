const StudentSideBar=()=>{
return(
<main>
    <section className="card bg-white" style={{height:'85dvh'}}>
        <div className="card border-bottom border-4 rounded-1 text-center py-5 px-2" style={{boxShadow:'0px 0px 15px #888888'}}>
            <div>
            <img src="doctor.png" className="rounded-circle text-center" width={100} height={100} alt="" />
            </div>
            <span className="text center fs-4 d-block fw-bolder">User names</span>
            <span className="text center d-block">example@gmail.com</span>
        </div>
        <div className="mt-3">
            <ul >
                <li className="nav-link mb-3"><i className="bi bi-bar-chart-line-fill"></i> My Dashboard</li>
                <li className="nav-link mb-3">
                <i className="bi bi-houses-fill"></i> Home
                </li>
                <li className="nav-link mb-3"><i className="bi bi-bell-fill"></i> Notification</li>
                <li className="nav-link mb-3"><i className="bi bi-gear-fill"></i> Settings</li>
                <li className="nav-link mb-3"><i className="bi bi-toggle2-off"></i> Theme</li>
            </ul>
        </div>
    </section>
</main>
)}
export default StudentSideBar