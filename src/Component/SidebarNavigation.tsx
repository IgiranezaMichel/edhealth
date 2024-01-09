import { Link } from 'react-router-dom'
import '../index.css'
import React, { ReactNode } from "react"
type Navigation={
    decorant:SidebarNavigationType,
    children:ReactNode,
    linkClass:string,
    linkData:{
        data:string,
        url:string,
        icon:string
    }[]
}
export const SidebarNavigation:React.FC<Navigation>=(data)=>{
    return (
        <>
            <div className="wrapper d-flex align-items-stretch ">
                <nav id="sidebar" className={data.decorant.navClass}>
                    <div className="img bg-wrap text-center py-4" style={{ backgroundImage: "url("+data.decorant.userpicture+")" }}>
                        <div className="user-logo">
                            <div className="img" style={{ backgroundImage: "url("+data.decorant.userpicture+")" }}></div>
                            <h3>{data.decorant.username}</h3>
                        </div>
                    </div>
                    <ul className="list-unstyled components mb-5 fw-bold ">
                       {
                        data.linkData.map((Linkdata,index)=>{
                            return(
                            <li key={index} className={data.decorant.linkClass}>
                                <Link className={data.linkClass} to={Linkdata.url}><span className={Linkdata.icon}></span>{Linkdata.data}</Link>
                            </li>
                            )
                        })
                       }
                    </ul>
                </nav>
                <div id="content" className="p-4 p-md-5 pt-5">
                    {data.children}
                </div>
            </div>;
        </>
    )

}
