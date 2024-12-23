const SidebarButton = ({img, bg, textColor, text}) => {
  return (
    <>
      <button className={`flex gap-1 items-center ${bg} px-3 py-2 rounded-lg  ${textColor} font-semibold`}>
        <img src={img} />
        <span>{text}</span>
      </button>
    </>
  )
}

export default SidebarButton
