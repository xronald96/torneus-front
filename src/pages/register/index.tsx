import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar';

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit: SubmitHandler<any> = async (data) => {};

	return (
		<>
			<div className='px-12 flex align-center flex-col'>
				<Form className='flex flex-wrap justify-center gap-3' onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className='basis-5/12' controlId='formBasicName'>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							className='focus:border-green-500'
							placeholder='Introduzca nombre'
							{...register('name')}
						/>
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasicSurname'>
						<Form.Label>Apellidos</Form.Label>
						<Form.Control placeholder='Introduzca Apellidos' {...register('surname')} />
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control placeholder='Introduzca email' {...register('email')} />
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							placeholder='Introduzca contraseña'
							{...register('password')}
						/>
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasicPhone'>
						<Form.Label>Phone</Form.Label>
						<Form.Control placeholder='Introduzca teléfono' {...register('phone')} />
					</Form.Group>
					<Form.Group className='basis-5/12' controlId='formBasicCountry'>
						<Form.Label>País</Form.Label>
						<Form.Control placeholder='Introduzca país' {...register('country')} />
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasiCity'>
						<Form.Label>Ciudad</Form.Label>
						<Form.Control placeholder='Introduzca ciudad' {...register('city')} />
					</Form.Group>

					<Form.Group className='basis-5/12' controlId='formBasiBirthday'>
						<Form.Label>Cumpleaños</Form.Label>
						<Form.Control placeholder='08-05-1996' {...register('birthday')} />
					</Form.Group>

					<Form.Group className='basis-5/12 justify-self-start' controlId='formBasicPhone'>
						<Form.Label>Sexo</Form.Label>
						<Form.Select aria-label='Default select example' {...register('sex')}>
							<option value='male'>Masculino</option>
							<option value='female'>Femenino</option>
							<option value='others'>Others</option>
						</Form.Select>
					</Form.Group>
				</Form>
				<div className='flex align-middle justify-center space-x-10'>
					<Button className='bg-green-500 border-0'>Cancelar</Button>
					<Button className='bg-green-500 border-0' type='submit'>
						Crear
					</Button>
				</div>
			</div>
		</>
	);
}
