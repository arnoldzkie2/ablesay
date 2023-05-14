import Link from "next/link";

interface LogoProps {
}

const Logo: React.FC<LogoProps> = ({ }) => {
    return (
        <Link href='/'>
            <h1 className='text-3xl font-black text-sky-950'>Able<span className='text-yellow-500'>Say</span></h1>
        </Link>
    );
};

export default Logo;
