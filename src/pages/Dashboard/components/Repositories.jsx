import Repos from "./Repos"
import Title from "./Title"

const Repositories = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border-2 border-[#E9EAEB] shadow-custom-xs md:m-6  flex flex-col">
      <Title />
      <Repos text="design-system" badge="Public" tech="React" storage="7320 KB" day="1" />
      <Repos text="codeant-ci-app" badge="Private" tech="Javascript" storage="5871 KB" day="2" />
      <Repos text="analytics-dashboard" badge="Private" tech="Python" storage="4521 KB" day="5" />
      <Repos text="mobile-app" badge="Public" tech="Swift" storage="3096 KB" day="3" />
      <Repos text="e-commerce-platform" badge="Private" tech="Java" storage="6210 KB" day="6" />
      <Repos text="blog-website" badge="Public" tech="HTML/CSS" storage="1876 KB" day="4" />
      <Repos text="social-network" badge="Private" tech="PHP" storage="5432 KB" day="7" />
    
    </div>
  )
}

export default Repositories
