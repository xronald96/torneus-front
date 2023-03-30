'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import useLogout from '../hooks/useLogout';
import { getCurrentUser } from '../redux/slices/user.slice';

export default function LoginLogout() {
	const currentUser: any = useSelector(getCurrentUser);
	const { logout } = useLogout();
	return (
		<>
			{currentUser ? (
				<>
					<Link
						onClick={logout}
						href={'/'}
						className='flex font-bold mr-5 text-white no-underline font-poppins'
					>
						Desconectarse
					</Link>
					<div className='border-2 rounded-full h-10 w-10 flex justify-center items-center'>
						{currentUser ? currentUser?.user?.name.slice(0, 1) : 'U'}
					</div>
				</>
			) : (
				<>
					<Link href={'/login'} className='flex font-bold mr-5 text-white no-underline font-poppins'>
						Iniciar sesión
					</Link>
					<Link href={'/register'} className='flex font-bold text-white no-underline font-poppins'>
						Registrarse
					</Link>
				</>
			)}
		</>
	);
}
