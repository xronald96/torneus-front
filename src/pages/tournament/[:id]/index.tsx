import ResultTable from '../../../components/Resulttable';
import { getGroups } from '../../api/group';
import { getMatches } from '../../api/match';

export default function TournamentView({ groups }: any) {
	return (
		<div className='flex flex-wrap justify-center'>
			<div className='flex p-10 gap-5 flex-wrap justify-center'>
				{groups.map((item: any) => {
					return <ResultTable key={item._id} data={item} />;
				})}
				
			</div>
		</div>
	);
}

export async function getServerSideProps(context: any) {
	let groups = (await getGroups({ tournamentId: context.params[':id'] })).data.getGroups;
	
	return {
		props: {
			groups: groups,
		},
	};
}
