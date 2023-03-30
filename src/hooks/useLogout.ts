import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/slices/user.slice';

export default function useLogout() {
	const dispatch = useDispatch();
	const logout = () => {
		Cookies.remove('currentUser');
		dispatch(setCurrentUser(null));
	};

	return { logout };
}
