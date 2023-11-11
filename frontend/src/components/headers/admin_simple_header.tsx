"use client"

import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { PiNotePencilThin } from 'react-icons/pi'
import SearchBar from '../search/search_bar'
import { useState } from 'react'

export default function AdminSimpleHeader() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: any) => {
    // Faça o que for necessário com o termo de pesquisa (por exemplo, filtrar dados)
    console.log('Termo de pesquisa:', term);
    setSearchTerm(term);
  };
  
  return (
    <>
        <header className="h-20 w-screen flex items-center justify-start bg-silver-chalice-neutral-50 fixed z-50" >
                <nav className="w-full px-120px text-brand-secondary">
                  <div className="w-full flex  justify-between gap-8" >
                    <SearchBar onChange={handleSearch} />
                    <Link href={"/admin/publish_project"}>
                      <div className="flex gap-4">
                        <PiNotePencilThin className=" text-brand-text text-2xl "/>
                        <p className="text-mine-shaft-500 hover:text-brand-text hover:border-b hover:border-brand-text"> New project </p>
                      </div>
                    </Link> 
                  </div>
                </nav>
        </header>
    </>
  );
};