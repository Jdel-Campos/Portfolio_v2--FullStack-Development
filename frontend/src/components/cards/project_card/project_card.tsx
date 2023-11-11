"use client"

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';


import PublishAndEditButton from '../../buttons/publish_and_edit_button';
import DeleteConfirmation from '@/components/modais/delete_confirmation';
import CheckingLinks from '@/components/links/checking _links';
import DeleteButton from '@/components/buttons/delete_button';
import PictureFrame from '../picture_frame/picture_frame';

export default function ProjectCard() {
    const pathname = usePathname()
    const isAdminRoute = pathname === '/admin';
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const notify = () => toast("Projeto excluido com sucesso!");

    const handleDeleteClick = () => {
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        // Lógica para excluir o projeto 
        toast.success('The desired project has been successfully deleted and no longer exists.');
        setDeleteModalOpen(false);
    };

    const handleDeleteCancel = () => {
        setDeleteModalOpen(false);
    };


    return (
        <>
            {isAdminRoute ? (
                        <div className="w-350px px-8 pt-16 pb-4 flex flex-col gap-8 border border-silver-chalice-neutral-200 rounded-xl relative">
                        <div className="flex items-center justify-center px-2 py-1 border rounded-bl-xl rounded-tr-xl h-8 w-40 absolute top-0 right-0 border-brand-accent bg-brand-accent"> 
                            <p className="text-sm font-medium italic"> Project Full Stack </p>
                        </div>
                        <a href="" className="hover:opacity-75">
                            <div className="flex gap-2 justify-center relative">
                                <h3 className="italic font-semibold text-xl text-brand-text z-20"> My Portfolio </h3>
                                <div className="flex items-center justify-center border absolute w-32 h-3 top-4 left-[70px] border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                        </a>
                        
                        {/* Essa image, será puxado da capa do projeto */}
                        <div className="flex flex-col items-center gap-4"> 
                            <div className="border w-[284px] h-163px bg-silver-chalice-neutral-400 rounded-xl"></div>
                        </div>
            
                        {/* Esse texto será puxado do overview do projeto */}
                        <div className="text-justify text-sm font-normal text-brand-text"> 
                            In this project, I sought to create a simple and minimalist experience, conveying my style and level of work. I avoided visual overload by keeping a clean approach. I&apos;ve directed technical details to specific pages, serving both those interested in detailed information and those wanting an overview. 
                        </div>
                        
                        <div className="flex justify-between">
                            <Link href={""}>
                                <PublishAndEditButton width={'w-150px'} height={'h-8'} content={'Editing'} />
                            </Link>
            
                            <DeleteButton width={'w-100px'} height={'h-8'} content={'Delete'} onClick={handleDeleteClick} />
                        </div>
                    </div>
            ) : (
                    <div className="w-350px px-8 pt-16 pb-4 flex flex-col gap-8 border border-silver-chalice-neutral-200 rounded-xl relative">

                        <a href="" className="hover:opacity-75">
                            <div className="flex gap-2 justify-center relative">
                                <h3 className="italic font-semibold text-xl text-brand-text z-20"> My Portfolio </h3>
                                <div className="flex items-center justify-center border absolute w-32 h-3 top-4 left-[70px] border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                        </a>
                        
                        <PictureFrame />

                        {/* Esse texto será puxado do overview do projeto */}
                        <div className="text-justify text-sm font-normal text-brand-text"> 
                            In this project, I sought to create a simple and minimalist experience, conveying my style and level of work. I avoided visual overload by keeping a clean approach. I&apos;ve directed technical details to specific pages, serving both those interested in detailed information and those wanting an overview. 
                        </div>
                        
                        <CheckingLinks />
                    </div>
            )}

            {isDeleteModalOpen && (
                <DeleteConfirmation onConfirm={handleDeleteConfirm} onCancel={handleDeleteCancel} />
            )}
        </>
    );
};