import { SidebarNavigation } from "../../Component/SidebarNavigation";
import { ReactNode } from "react";
import AcustomNavBar from "../AcustomNavBar";

 
type linkData={
    data:string,
    url:string,
    icon:string
}
export const NcnmNavigationBar=(data:{children:ReactNode})=>{
    const linkData:linkData[]=[
        {
           data:'My Dashboard',
           icon:'bi bi-house-fill mx-2',
           url:'/ncnm'
        },
        {
            data:'Certified Users',
            icon:'bi bi-people-fill mx-2',
            url:'/ncnm/users'
         },
         {
            data:'Schools',
            icon:'bi bi-houses-fill mx-2',
            url:'/ncnm/school'
         },
         {
            data:'Hospital',
            icon:'bi bi-hospital-fill mx-2',
            url:'/ncnm/hospital'
         },
         {
            data:'Training',
            icon:'bi bi-book-fill mx-2',
            url:'/ncnm/training'
         },
         {
            data:'Certificate',
            icon:'bi bi-file-fill mx-2',
            url:'/ncnm/certificate'
         },
        {
           data:'Notification',
           icon:'bi bi-bell-fill mx-2',
           url:'/ncnm/notification'
        },
        {
           data:'Settings',
           icon:'bi bi-gear-fill mx-2',
           url:'/ncnm/setting'
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
            <div className="sticky-top ">
                <AcustomNavBar institutionName="Ncnm" />
            </div>
            <SidebarNavigation linkClass="text-dark nav-link" decorant={{
                linkClass:'text-info',navClass:'bg-dark-subtle',username:'Ncnm System ncnm', userpicture:'/visit/bg.jpeg'
            }} 
            linkData={linkData}>
            {data.children}
        </SidebarNavigation>
        </main>
        </>
    )
}