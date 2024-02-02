"use client"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { ThemeContext } from "@/context/themeContext"
import { use, useContext } from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useContext(ThemeContext)
    const a = use(ThemeContext)
    console.log(a)
    return (
        <body className={`${theme.value && 'dark bg-gray-900'} min-h-screen select-none font-popins`}>
            <Navbar />
            {children}
            <Footer />
        </body>
    )
}

export default layout