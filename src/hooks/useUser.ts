import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function useCurrentUser() {
	const [user, setUser] = useState();
	useEffect(() => {
		const currentUser = Cookies.get('currentUser');
		if (currentUser) setUser(JSON.parse(currentUser));
	}, []);
	return user;
}
