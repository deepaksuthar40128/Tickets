"use client"
import Loader from "@/components/loader/Loader";
import Player from "@/components/player/Player";
import { Button } from "@/components/ui/button";
import { Dot } from 'lucide-react';
import { useParams } from "next/navigation";
import useSWR from "swr";
const Show = () => {
    const { id } = useParams();
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isValidating } = useSWR(`/api/movies/${id}`, fetcher);
    console.log(data)
    return (
        <main>
            {data &&
                <div className="h-max relative ">
                    <div className="w-full relative sm:shadow-huge overflow-hidden" style={{ maxHeight: '95vh' }}>
                        <Player src={data.video.link} />
                    </div>
                    <div className="sm:text-white text-black-400 sm:absolute bottom-0 left-0 pb-8 pl-8 w-full mt-3 sm:mt-0">
                        <h2 className="text-3xl font-bold sm:text-5xl mb-4 dark:text-white">{data.video.title}</h2>
                        <p className="mb-4 dark:text-gray-300"><span>{data.video.year}</span><Dot className="inline text-gray-300" /><span>{data.video.time}</span><Dot className="inline text-gray-300" /><span>{data.video.language}</span></p>
                        <p className="max-w-80 dark:text-gray-300 mb-4">{data.video.description}</p>
                        <p className="mb-3 max-w-full overflow-auto">{
                            data.video.tags.map((tag: string, index: number) => {
                                return <>
                                    <span>{tag}</span>
                                    {
                                        (index != data.video.tags.length - 1) &&
                                        <span className="mx-2">|</span>
                                    }
                                </>;
                            })}
                        </p>
                        <Button>Book Show</Button>
                    </div>
                </div>
            }
            {
                isValidating && <Loader />
            }
        </main>
    )
}
export default Show;