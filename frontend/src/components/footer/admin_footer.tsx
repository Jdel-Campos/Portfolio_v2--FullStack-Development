import { LiaCopyright } from "react-icons/lia"


export default function AdminFooterPage() {    
    return (
      <>
        <div className="flex items-center justify-center gap-2 w-full h-16 bg-silver-chalice-neutral-50 border-t-2 border-silver-chalice-neutral-300">
            <LiaCopyright className="text-mine-shaft-primary-600" />
            <p className="font-medium italic text-sm text-mine-shaft-primary-600"> 2023 - Designed & Built by Jardel Campos </p>
        </div>
      </>
    );
};