const Statistics = () => {
  return (
    <div className="rounded-3xl shadow-custom py-4 absolute">

        <div className="flex gap-2 px-5">
            <img src="/Subtract.png"/>
            <p className="text-lg font-bold text-[#081735] leading-5 mt-1.5">AI to Detect & Autofix Bad Code</p>
        </div>

        <div className="w-full h-0.5 bg-[#E9EAEB] mt-4"></div>

        <div className="flex mt-4 px-5 gap-20">
            <div className="flex flex-col justify-center items-center">
                <p className="text-[#081735] text-lg font-bold">30+</p>
                <p className="text-[#171717] text-sm">Language Support</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-[#081735] text-lg font-bold">10K</p>
                <p className="text-[#171717] text-sm">Developers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-[#081735] text-lg font-bold">100K+</p>
                <p className="text-[#171717] text-sm">Hours Saved</p>
            </div>
        </div>
        
    </div>
  )
}

export default Statistics
