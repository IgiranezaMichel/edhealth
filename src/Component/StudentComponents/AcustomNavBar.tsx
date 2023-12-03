const AcustomNavBar=(data:{institutionName:string})=>{
    return(
    <main className="bg-white fw-bolder w-100 border-bottom p-3" style={{float:'right'}}>
       <span className="display-6 fw-bolder"><i className="bi bi-droplet" ></i><span className="text-dark">ED</span><span className="text-info">HEALTH</span></span>
        <span className="fs-4" style={{float:'right'}}> <i className="bi bi-house" ></i><span className="text-dark">{data.institutionName}</span></span>
    </main>
    )
}
export default AcustomNavBar;