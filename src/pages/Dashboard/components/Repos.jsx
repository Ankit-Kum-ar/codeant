const Repos = ({text, badge, tech, storage, day}) => {
  return (
    <div className="py-6 flex md:px-0 px-4 flex-col md:pl-6 gap-3 hover:bg-[#F5F5F5] border-b-2">

        <div className="flex gap-2">
            <p className="md:text-xl text-lg font-medium text-[#181D27]">{text}</p>
            <button className="rounded-full text-[#175CD3] bg-[#EFF8FF] border-[1px] border-[#175CD3] px-2 md:text-base text-sm">{badge}</button>
        </div>

        <div className="flex md:gap-10 gap-6">
            <div className="flex gap-2 justify-center items-center">
                <p className="md:text-base text-sm">{tech}</p>
                <img src="/dot.png" className="w-2 h-2" />
            </div>

            <div className="flex justify-center items-center gap-2">
                <img src="/database.png" />
                <p className="text-[#181D27] md:text-base text-sm">{storage}</p>
            </div>

            <p className="text-[#181D27] md:text-base text-sm">Updated {day} day ago</p>
        </div>

    </div>
  )
}

export default Repos
