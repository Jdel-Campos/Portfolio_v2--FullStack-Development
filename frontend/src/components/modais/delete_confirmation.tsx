import { DeleteConfirmation } from '@/types/types';
import DeleteButton from '../buttons/delete_button';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }: DeleteConfirmation ) {

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => { 
            if (event.key === 'Escape') { onCancel() } 
        };
        
        window.addEventListener('keydown', handleKeyPress);

        return () => { 
            window.removeEventListener('keydown', handleKeyPress) 
        };
    }, [onCancel]);

    return (
        <>
            <div className='z-50 fixed top-auto left-auto'>
                <div className="relative flex flex-col justify-center items-center w-766px h-244px border border-silver-chalice-neutral-800 rounded-2xl px-28 bg-brand-background"> 
                    <div className='flex flex-col justify-center items-center gap-14'>
                      <p className="text-center">Do you really want to delete this project? Once deleted, there is no way to recover it.</p>
                      <DeleteButton width={'w-300px'} height={'h-10'} content={'Delete'} onClick={onConfirm} />
                    </div>
                    <button onClick={onCancel} className="cursor-pointer text-brand-primary hover:underline absolute top-4 right-4">
                      <AiOutlineClose className="text-2xl" />
                    </button>
                </div>
            </div>
        </>
    );
};