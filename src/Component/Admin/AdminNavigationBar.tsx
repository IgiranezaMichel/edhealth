import { SidebarNavigation } from "../../Component/SidebarNavigation";
import { ReactNode } from "react";
import AcustomNavBar from "../AcustomNavBar";

 
type linkData={
    data:string,
    url:string,
    icon:string
}
export const AdminNavigationBar=(data:{children:ReactNode})=>{
    const linkData:linkData[]=[
        {
           data:'My Dashboard',
           icon:'bi bi-house-fill mx-2',
           url:'/admin'
        },
        {
            data:'Manage Users',
            icon:'bi bi-people-fill mx-2',
            url:'/admin/users'
         },
         {
            data:'Manage School',
            icon:'bi bi-house-fill mx-2',
            url:'/admin/school'
         },
         {
            data:'Manage Hospital',
            icon:'bi bi-hospital-fill mx-2',
            url:'/admin/hospital'
         },
        {
           data:'Notification',
           icon:'bi bi-bell-fill mx-2',
           url:'/admin/notification'
        },
        {
           data:'Settings',
           icon:'bi bi-gear-fill mx-2',
           url:'/admin/setting'
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
                <AcustomNavBar institutionName="admin Name" />
            </div>
            <SidebarNavigation linkClass="text-dark nav-link" decorant={{
                linkClass:'text-white',navClass:'bg-info',username:'System Admin', userpicture:'/visit/bg.jpeg'
            }} 
            linkData={linkData}>
            {data.children}
        </SidebarNavigation>
        </main>
        </>
    )
}