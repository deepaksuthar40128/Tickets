'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from "react";
import { number } from "zod";

const SearchForm = ({ searchParams, setSearchParams }: { searchParams: { catagry: string, search: string }, setSearchParams: Dispatch<SetStateAction<{ catagry: string, search: string }>> }) => {
    const [search, setSearch] = useState('');
    useEffect(() => {
        setSearchParams({ ...searchParams, search })
    }, [search])
    let key: unknown;
    const handleChange = (e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
        clearTimeout(key as number)
        key = setTimeout(() => {
            let value = (e.target as HTMLInputElement).value;
            value = value.trim();
            setSearch(value);
        }, 1000);
    }
    return (
        <form className="flex-center mx-auto mt-10 w-full  sm:px-5">
            <label className="flex-center relative w-full max-w-3xl">
                <Image
                    src='/magnifying-glass.svg'
                    className="absolute left-8"
                    width={32}
                    height={32}
                    alt="Search Icone"
                />
                <Input
                    className="base-regular bg-gray-300 dark:bg-gray-800
                    h-fit 
                    max-h-10 
                    border-0 
                    py-6 pl-20 pr-8
                     text-black-400
                     text-xl
                     !ring-0 !ring-offset-0
                     placeholder:text-gray-400
                     dark:text-white
                     sm:text-xl
                     "
                    type="text"
                    placeholder="Search Movies..."
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleChange(e)}
                />
            </label>
        </form>
    )
}
export default SearchForm;