import { useState } from "react";
import SignInButton from "../../../components/Elements/SignInButton";

const SignInForm = () => {
    const [classType, setClassType] = useState('saas');

    const activeClass = "w-5/12 bg-[#1570EF] px-3 md:py-4 py-3 rounded-lg border-2 border-[#FFFFFF] text-white md:text-xl text-lg md:font-semibold font-medium";
    const inactiveClass = "w-5/12 rounded-lg px-3 md:py-4 py-3 border-2 border-[#E9EAEB] text-[#414651] md:text-xl text-lg md:font-semibold font-medium";

    return (
        <div className="bg-[#fff] flex flex-col justify-center items-center md:w-10/12 w-11/12  pt-9 border-2 rounded-xl border-[#E9EAEB] shadow-custom-xs">
        
            <div className="flex md:mb-9 mb-6">
                <img src="/Subtract.png" />
                <p className="text-3xl font-normal ml-3 text-[#181D27] leading-8 ">CodeAnt AI</p>
            </div>

            <p className="text-[#181D27] md:text-3xl text-2xl  font-semibold mb-5">Welcome to CodeAnt AI</p>

            <div className="flex w-full justify-center items-center mb-9">
                <button className={`${classType === 'saas' ? activeClass : inactiveClass }`} onClick={() => setClassType('saas')}>
                    SAAS
                </button>
                <button className={`${classType === 'selfHosted' ? activeClass : inactiveClass}`} onClick={() => setClassType('selfHosted')}>
                    Self Hosted
                </button>
            </div>

            <div className="w-full h-0.5 bg-[#E9EAEB]"></div>

            <div className=" w-full flex flex-col justify-center items-center my-6 gap-4">
                {
                    classType === 'saas' ? (
                        <>
                            <SignInButton img="/github.png" text="Sign in with GitHub"/>
                            <SignInButton img="/bitbucket.png" text="Sign in with Bitbucket"/>
                            <SignInButton img="/azure.png" text="Sign in with Azure Devops"/>
                            <SignInButton img="/gitlab.png" text="Sign in with GitLab"/>
                        </>
                    ) : (
                        <>
                            <SignInButton img="/gitlab.png" text="Sign in with GitLab"/>
                            <SignInButton img="/sso.png" text="Sign in with SSO"/>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default SignInForm
