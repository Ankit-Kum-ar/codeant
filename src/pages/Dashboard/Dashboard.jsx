import Navbar from "../../components/Layout/Navbar"
import Sidebar from "../../components/Layout/Sidebar"
import Repositories from "./components/Repositories"

const Dashboard = () => {
  return (
    <div className="flex">
      
      <div className=" w-2.5/12 bg-[#FFFFFF] my-7 px-4 hidden md:block">
        <Sidebar/>
      </div>

      <div className="h-full w-full md:bg-[#FAFAFA]">
        <Navbar />
        <Repositories />
      </div>

    </div>
  )
}

export default Dashboard
