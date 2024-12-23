import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignInButton = ({img, text}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    }
    return (
        <>
        <button className='md:w-8/12 w-11/12 flex rounded-lg border-2 border-[#D8DAE5] py-4 justify-center items-center gap-3' onClick={handleClick}>
            <img src={img} />
            <p className='text-[#171717] text-base font-semibold'>{text}</p>
        </button>
        </>
    )
}

export default SignInButton
