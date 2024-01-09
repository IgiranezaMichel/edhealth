import { SidebarNavigation } from "../../Component/SidebarNavigation";
import { ReactNode } from "react";
import AcustomNavBar from "../../Component/AcustomNavBar";

 
type linkData={
    data:string,
    url:string,
    icon:string
}
export const HospitalNavigation=(data:{children:ReactNode})=>{
    const linkData:linkData[]=[
        {
           data:'My Dashboard',
           icon:'bi bi-house-fill mx-2',
           url:'/hospital'
        },
        {
           data:'Home',
           icon:'bi bi-house-fill mx-2',
           url:'/hospital/home'
        },
        {
           data:'Notification',
           icon:'bi bi-bell-fill mx-2',
           url:'/hospital/notification'
        },
        {
           data:'Settings',
           icon:'bi bi-gear-fill mx-2',
           url:'/hospital/setting'
        },
        {
           data:'Logout',
           icon:'bi bi-gear-fill mx-2',
           url:'/logout'
        }
        ];
    return(
        <>
         <main >
            <div className="sticky-top">
                <AcustomNavBar institutionName="Hospital Name" />
            </div>
            <SidebarNavigation linkClass="text-dark nav-link" decorant={{
                linkClass:'text-white',navClass:'bg-info',username:'Mike Igiraneza', userpicture:'/visit/bg.jpeg'
            }} 
            linkData={linkData}>
            {data.children}
        </SidebarNavigation>
        </main>
        </>
    )
}