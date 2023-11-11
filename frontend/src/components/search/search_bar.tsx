import { CiSearch } from 'react-icons/ci'

export default function SearchBar({ onChange }: any) {
    return (
      <div className="relative h-10 w-300px text-silver-chalice-neutral-400">
        <input
          type="text"
          placeholder="Do you need a specific project ..."
          className="px-4 py-2 border rounded-full focus:outline-none focus:border-brand-text h-9 w-300px text-sm"
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="absolute top-2 right-4 text">
            <CiSearch className="  text-silver-chalice-neutral-400 text-xl "/>
        </div>
      </div>
    );
};
