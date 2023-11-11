import { DeleteButtonProps } from '@/types/types';

export default function DeleteButton({width, height, content, onClick}: DeleteButtonProps) {
    return (
        <>
            <button className={`${width} ${height} border border-island-spice-800 bg-island-spice-100 flex justify-center items-center rounded-md font-semibold italic text-island-spice-800`} 
                    onClick={onClick}>
                <p> {content} </p>
            </button>
        </>
    );
};