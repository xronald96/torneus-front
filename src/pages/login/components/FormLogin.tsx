'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import useLogin from '../../../hooks/useLogin';
type Crendentials = {
	email: string;
	password: string;
};
export default function FormLogin() {
	const router = useRouter();
	const { login, error } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Crendentials>();
	const onSubmit: SubmitHandler<Crendentials> = async (data) => {
		await login(data);
		if (!error) router.push('/');
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email</Form.Label>
				<Form.Control
					className='focus:border-green-500'
					type='email'
					placeholder='Enter email'
					{...register('email')}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='Enter password'
					{...register('password')}
				/>
			</Form.Group>
			<Button className='bg-green-500 border-0' type='submit'>
				Entrar
			</Button>
		</Form>
	);
}
