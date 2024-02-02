"use client"
import Filters from "@/components/filters/Filters";
import HomeCard from "@/components/homeCards/HomeCards";
import Loader from "@/components/loader/Loader";
import SearchForm from "@/components/searchForm/SearchForm";
import { useState } from "react";
import useSWR from 'swr';

const Home = () => {
    const [searchParams, setSearchParams] = useState({ catagry: 'All', search: '' })
    const genrateUrl = () => {
        const baseUrl = '/api/movies/all';
        return baseUrl + `?catagry=${searchParams.catagry}&search=${searchParams.search}`
    }
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isValidating } = useSWR(genrateUrl(), fetcher);

    if (error) {
        return (
            <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
                <section className="w-full">
                    <div className="text-red-500 text-center py-6">Error loading data</div>
                </section>
            </main>
        );
    }

    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
            <section className="w-full">
                <div className="relative min-h-[274px] w-full flex-col rounded-xl bg-light_banner dark:bg-dark_banner bg-cover bg-center overflow-hidden">
                    <div className="absolute inset-0 flex-center backdrop-filter backdrop-brightness-75 backdrop-blur-sm bg-opacity-50">
                        <h1 className="sm:heading1 select-none heading2 text-gray-100 text-center">Movie Tickets</h1>
                    </div>
                </div>
                <div className="py-3 w-3/4 mx-auto">
                    <SearchForm setSearchParams={setSearchParams} searchParams={searchParams} />
                </div>
                <div className="bg-gray-300 dark:bg-gray-800 rounded-md">
                    <Filters setSearchParams={setSearchParams} searchParams={searchParams} />
                </div>
                {
                    isValidating &&
                    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
                        <section className="w-full">
                            <Loader />
                        </section>
                    </main>
                }
                {data && <div className="flex flex-wrap justify-around">
                    {data.data.map((movie: any) => (
                        <HomeCard key={movie.id} data={movie} />
                    ))}
                    {
                        data && data.data.length == 0 && <div className="dark:text-white text-gray-400">Nothing To Show Here</div>
                    }
                </div>
                }
            </section>
        </main>
    );
};

export default Home;
