import { Inter, Poppins } from 'next/font/google';
import NavBar from '../components/NavBar';
import ResultTable from '../components/Resulttable';
import Tournament from '../components/Tournmanet';
import { getTournaments } from './api/tournament';

const inter = Inter({ subsets: ['latin'] });
const popins = Poppins({
	subsets: ['latin'],
	weight: '100',
});

export default function Home({ tournaments }: { tournaments: any[] }) {
	return (
		<>
			<Tournament data={tournaments} />
		</>
	);
}

export async function getServerSideProps() {
	const tournaments = await getTournaments();
	return {
		props: {
			tournaments: tournaments.data.getTournaments,
		}, // will be passed to the page component as props
	};
}
