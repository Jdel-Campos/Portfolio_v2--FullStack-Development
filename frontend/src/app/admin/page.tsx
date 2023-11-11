import ProjectCard from "@/components/cards/project_card/project_card";
import AdminFooterPage from "@/components/footer/admin_footer";
import AdminSimpleHeader from "@/components/headers/admin_simple_header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdminPage() {

    return (
        <>
            <AdminSimpleHeader/>
            <div className="px-120px py-56 flex flex-wrap justify-center gap-7">
                <ProjectCard /> 
                <ProjectCard /> 
                <ProjectCard />
            </div>
            <AdminFooterPage />
            <ToastContainer />
        </>
    )
};