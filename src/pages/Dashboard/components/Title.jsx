const Title = () => {
  return (
    <div className="py-5 md:px-6 px-4 flex flex-col border-b-2">

      <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:justify-between mb-4">
        <div className="flex flex-col gap-1">
            <p className="text-[#181D27] text-2xl font-semibold">Repositories</p>
            <p className="text-[#414651] text-sm">33 total repositories</p>
        </div>
        <div className="flex gap-3">
            <button className="md:px-3 md:pt-4 px-2 py-3 flex gap-2 justify-center rounded-lg border-2 border-[#D5D7DA] shadow-skeumorphic">
                <img src="/refresh.png"/>
                <p className="text-[#414651] font-normal md:text-base text-sm">Refresh All</p>
            </button>
            <button className="md:px-3 md:pt-4 px-2 py-3 flex gap-2 justify-center rounded-lg border-2  bg-[#1570EF] shadow-skeumorphic">
                <img src="/plus.png"/>
                <p className="text-[#FFFFFF] font-normal md:text-base text-sm">Add Repository</p>
            </button>
        </div>
      </div>

      <div className="flex px-3 py-2 gap-1 border-2 border-[#D5D7DA] rounded-lg md:w-5/12">
        <img src="/search-icon.png" />
        <input placeholder="Search Repositories" className="text-[#414651] placeholder-[#414651] focus:outline-none w-full" />
      </div>

    </div>
  )
}

export default Title
