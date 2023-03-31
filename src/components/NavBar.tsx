import Image from 'next/image';
import Link from 'next/link';
import LoginLogout from './LoginLogout';
import torneysIcon from '../../public/torneusLogo.png';
export default function NavBar({ children } : any) {
	return (
		<>
			<div className='flex flex-row py-6 px-6 items-center bg-main font'>
				<Image width={50} height={80} alt='' src={torneysIcon} />
				<Link
					href={'/'}
					className='flex basis-1/2 justify-start grow  no-underline font-bold text-2xl text-white font-poppins'
				>
					Torneus ES
				</Link>
				{/* <Link
					href={'/about'}
					className='flex font-bold mr-5 no-underline text-white font-poppins'
				>
					Quienes somos
				</Link>
				<LoginLogout /> */}
			</div>
			{children}
		</>
	);
}
