"use client"

import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";

const Filters = ({ searchParams, setSearchParams }: { searchParams: { catagry: string, search: string }, setSearchParams: Dispatch<SetStateAction<{ catagry: string, search: string }>> }) => {
    const catagories = ['All', 'Bollywood', 'Hollywood', 'Horror',
        'Action', 'Adventure', 'Drama',
        'Romance', 'Thriller', 'Family', 'Crime',
        'Documentary', 'Classic'];
    const [active, setActive] = useState('');
    useEffect(() => {
        if (active != '')
            setSearchParams({ ...searchParams, catagry: active })
    }, [active])
    const handleClick = (catagry: string) => {
        setActive(catagry);
    }
    return (
        <ul className="text-black-400 dark:text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-2 my-4">
            {
                catagories.map((catagry, index) => {
                    return (
                        <button key={index} onClick={() => handleClick(catagry)}
                            className={`${active === catagry && 'bg-white text-black-400'} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`} > {catagry}</button>
                    )
                })
            }
        </ul >
    )
}

export default Filters;