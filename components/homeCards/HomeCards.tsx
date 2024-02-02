import Image from "next/image";
import Link from "next/link";

const HomeCard = ({ data }: { data: any }) => {
    return (
        <div className="max-w-sm my-4 relative pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all cursor-pointer hover:scale-105">
            <Link href={`/show/${data.id}`} className="h-60 block">
                <Image className="rounded-t-lg w-full max-h-60 h-full object-cover" src={data.thumbnail} height={300} width={400} alt="Good" />
            </Link>
            <div className="p-5">
                <Link href={`/show/${data.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                <Link href={`/show/${data.id}`} className="inline-flex absolute bottom-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Video
                </Link>
            </div>
        </div>
    )
}
export default HomeCard;