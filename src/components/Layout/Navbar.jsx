import { useState } from "react"
import SidebarButton from "../Elements/SidebarButton"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="md:hidden block p-4">

            <div className="flex justify-between">
                <div className="flex gap-2 justify-center items-center">
                    <img className="w-7 h-8" src="Subtract.png" /> 
                    <p className="font-satoshi text-2xl font-normal text-[#181D27] mt-1">CodeAnt AI</p>
                </div>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <img className="w-6 h-6" src="cross.png" /> : <img className="w-6 h-6" src="nav.png" />
                    }
                </button>
            </div>

            {
                isOpen && (
                    <div className="mt-6 flex flex-col duration-500">
                        <button className="flex gap-1 justify-between rounded-lg border-2 border-[#D5D7DA] items-center px-3 py-2 mb-3">
                            <span className="text-base">UtkarshDhairyaPanwar</span>
                            <img src="/arrow.png"/>
                        </button>

                        <SidebarButton img="/home.png" bg="bg-[#1570EF]" textColor="text-[#FFFFFF]" text="Repositories"/>
                        <SidebarButton img="/code.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="AI Code Review"/>
                        <SidebarButton img="/cloud.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Cloud Security"/>
                        <SidebarButton img="/use.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="How to Use"/>
                        <SidebarButton img="/settings.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Settings"/>
                        <SidebarButton img="/support.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Support"/>
                        <SidebarButton img="/logout.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Logout"/>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
