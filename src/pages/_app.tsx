import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import { store } from '../redux/store/store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NavBar>
				<Component {...pageProps} />
			</NavBar>
		</Provider>
	);
}
