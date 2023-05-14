import React from 'react';

interface LoginProps {
}

const Login: React.FC<LoginProps> = ({  }) => {
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-black text-sky-950'>Able<span className='text-yellow-500'>Say</span></h1>
            <form className='flex flex-col p-7 mt-10 bg-white w-96 gap-4'>
                <input type="text" placeholder='Username' className='w-full border h-11 p-3' />
                <input type="password" placeholder='Password' className='w-full border h-11 p-3' />
                <button className='bg-yellow-500 h-10 rounded-md text-xl font-bold text-white'>Login</button>
            </form>
        </div>
    );
};

export default Login;
