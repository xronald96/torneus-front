import { CredentialsDto } from '../types/Auth.type';
import { login as Login } from '../pages/api/auth';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/slices/user.slice';

export default function useLogin() {
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const login = async (credentialsDto: CredentialsDto) => {
		const result = await Login(credentialsDto);
		if (!result.errors) {
			dispatch(setCurrentUser(result.data.singIn));
			Cookies.set('currentUser', result.data.singIn.token);
		} else setError(true);
	};
	return { login, error };
}
