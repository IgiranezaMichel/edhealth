const AcustomNavBar=(data:{institutuionName:string})=>{
    return(
    <main className="bg-white fw-bolder display-5 w-100 border-bottom p-3" style={{fontFamily:'fantasy',float:'right'}}>
       <span><i className="bi bi-droplet" ></i><span className="text-dark">ED</span><span className="text-info">HEALTH</span></span>
        <span style={{float:'right'}}> <i className="bi bi-person" ></i><span className="text-dark">User names</span></span>
    </main>
    )
}
export default AcustomNavBar;