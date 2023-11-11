import { ButtonProps } from '@/types/types';
import { LiaBehance, LiaDribbble, LiaGithub } from "react-icons/lia";
import { PiNotePencilThin } from "react-icons/pi";

export default function PublishAndEditButton({width, height, content}: ButtonProps) {
    // Preciso adicionar o evento de click nesse botão para direcionar para a página de edição.
  return (
    <>
        <button className={`${width} ${height} border border-camarone-secondary-700 bg-camarone-secondary-100 flex flex-row justify-between items-center rounded-md px-4 text-brand-secondary font-semibold italic`}>
            <p>{content}</p>
            <PiNotePencilThin className="text-lg"/>
        </button>
    </>
  );
};