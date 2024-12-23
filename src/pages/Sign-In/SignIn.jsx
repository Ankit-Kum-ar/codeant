import FixedCard from "./components/FixedCard"
import SignInForm from "./components/SignInForm"
import Statistics from "./components/Statistics"

const SignIn = () => {
  return (
    <div className="flex gap-6">

      <div className="w-1/2 bg-[#FFFFFF] h-screen flex-col justify-center items-center md:flex hidden"> 
        <Statistics />
        <FixedCard />
        <div className="absolute bottom-0 left-0">
          <img src="/bg-logo.png" className="w-56"/>
        </div>
      </div>

      <div className="md:w-1/2 w-screen  bg-[#FAFAFA] h-screen flex flex-col gap-8 justify-center items-center md:mt-0 mt-[7%]">
        <SignInForm />
        <p className="text-[#181D27] text-center md:text-base text-sm font-normal flex gap-2">
          By signing up you agree to the 
          <span className="font-bold hover:cursor-pointer">
            Privacy Policy.
          </span>
        </p>
      </div>

    </div>
  )
}

export default SignIn
