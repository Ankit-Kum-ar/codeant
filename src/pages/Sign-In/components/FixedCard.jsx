const FixedCard = () => {
  return (
    <div className="rounded-3xl shadow-custom py-3 px-8 relative top-36 bg-white left-32">
    
      <div className="flex gap-20">
        <img src="/purple-logo.png" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="1 3 20 23" fill="none">
              <path d="M8.83325 10.657L12.8333 6.65698L16.8333 10.657" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.8333 6.65698L12.8333 16.9861" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-sm font-bold text-[#0049C6]">14%</p>
          </div>
          <p className="text-[#171717] text-xs">This week</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-[#171717] text-sm font-bold mt-4">Issues Fixed</p>
        <p className="text-[#171717] text-3xl font-bold mt-1">500K+</p>
      </div>

    </div>
  )
}

export default FixedCard
