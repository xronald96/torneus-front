import FormLogin from './components/FormLogin';

export default function Login() {
	return (
		<div className='border-solid border-2 border-sky-500  flex items-center justify-center border-black h-screen absolute w-full'>
			<div className='container border-2 border-green-500 justify-center flex w-1/2 rounded-md p-12 flex-col'>
				<div className='font-bold mb-6 text-2xl'>Torneus ES</div>
				<FormLogin />
			</div>
		</div>
	);
}
