import { SidebarNavigation } from "../SidebarNavigation";
import { ReactNode } from "react";
import AcustomNavBar from "../AcustomNavBar";

 
type linkData={
    data:string,
    url:string,
    icon:string
}
export const StudentNavigation=(data:{children:ReactNode})=>{
    const linkData:linkData[]=[
        {
           data:'My Dashboard',
           icon:'bi bi-house-fill mx-2',
           url:'/student'
        },
        {
           data:'Notification',
           icon:'bi bi-bell-fill mx-2',
           url:'/student/notification'
        },
        {
           data:'Settings',
           icon:'bi bi-gear-fill mx-2',
           url:'/student/setting'
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
                <AcustomNavBar institutionName="student Name" />
            </div>
            <SidebarNavigation linkClass="text-dark nav-link" decorant={{
                linkClass:'text-white',navClass:'bg-warning',username:'Student name', userpicture:'/visit/bg.jpeg'
            }} 
            linkData={linkData}>
            {data.children}
        </SidebarNavigation>
        </main>
        </>
    )
}