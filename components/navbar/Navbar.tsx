import Image from "next/image"
import Link from "next/link"
import { DropdownMenuDemo } from "../settings/Setting"

const Navbar = () => {
    console.log("Navbar")
    return (
        <>
            <nav className="bg-gray-300 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={'/logo.png'} alt="Movies" height={100} width={140} />
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline hidden sm:block">+91-7027513016</Link>
                        <Link href="/register" className="text-sm bg-gray-700 text-white p-2 rounded-md no-underline active:bg-gray-800 active:scale-100 transition-all hover:scale-105">Register</Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 sticky z-10 top-0 shadow-md">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <DropdownMenuDemo />
                            </li>
                            <li>
                                <Link href="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar