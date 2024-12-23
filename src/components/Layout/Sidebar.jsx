import SidebarButton from "../Elements/SidebarButton"

const Sidebar = () => {

  return (
    <div className="flex flex-col h-full">
      
      <div className="flex gap-3 mb-9">
        <img src="/Subtract.png" className="w-7 h-8"/>
        <p className="text-[#181D27] font-satoshi text-2xl font-normal">CodeAnt AI</p>
      </div>

      <button className="flex gap-1 justify-start rounded-lg border-2 border-[#D5D7DA] items-center px-3 py-2 mb-6">
        <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-36 text-base">UtkarshDhairyaPan</span>
        <img src="/arrow.png"/>
      </button> 

      <div className="flex flex-col gap-1">
        <SidebarButton img="/home.png" bg="bg-[#1570EF]" textColor="text-[#FFFFFF]" text="Repositories"/>
        <SidebarButton img="/code.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="AI Code Review"/>
        <SidebarButton img="/cloud.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Cloud Security"/>
        <SidebarButton img="/use.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="How to Use"/>
        <SidebarButton img="/settings.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Settings"/>
      </div>

      <div className="flex flex-col mt-auto">
        <SidebarButton img="/support.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Support"/>
        <SidebarButton img="/logout.png" bg="bg-[#FFFFFF]" textColor="text-[#414651]" text="Logout"/>
      </div>

    </div>
  )
}

export default Sidebar