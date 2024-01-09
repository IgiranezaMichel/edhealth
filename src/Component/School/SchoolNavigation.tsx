import { SidebarNavigation } from "../../Component/SidebarNavigation";
import { ReactNode } from "react";
import AcustomNavBar from "../AcustomNavBar";

 
type linkData={
    data:string,
    url:string,
    icon:string
}
export const SchoolNavigation=(data:{children:ReactNode})=>{
    const linkData:linkData[]=[
        {
           data:'My Dashboard',
           icon:'bi bi-house-fill mx-2',
           url:'/school'
        },
        {
           data:'Home',
           icon:'bi bi-house-fill mx-2',
           url:'/school/home'
        },
        {
           data:'Notification',
           icon:'bi bi-bell-fill mx-2',
           url:'/school/notification'
        },
        {
           data:'Settings',
           icon:'bi bi-gear-fill mx-2',
           url:'/school/setting'
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
                <AcustomNavBar institutionName="School Name" />
            </div>
            <SidebarNavigation linkClass="text-dark nav-link" decorant={{
                linkClass:'text-white',navClass:'bg-info',username:'School Admin', userpicture:'/visit/bg.jpeg'
            }} 
            linkData={linkData}>
            {data.children}
        </SidebarNavigation>
        </main>
        </>
    )
}