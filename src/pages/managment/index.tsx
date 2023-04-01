'use-client';
import { useEffect, useState } from 'react';
import { UpdateMatchDto } from '../../types/Match.dto';
import { getGroups } from '../api/group';
import { getMatches, updateMatch } from '../api/match';

export default function Managment() {
	const [data, setData] = useState<any>([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		let groups = (await getGroups()).data.getGroups;
		setData(groups);
	};

	const onChange = (key: any, value: any, groupId: any, matchId: any) => {
		const result = [...data];
		const getGroup = result.filter((item: any) => item.group._id === groupId)[0];
		const getMatchIndex = getGroup.matches.findIndex((item: any) => item._id === matchId);
		getGroup.matches[getMatchIndex].teams[key].points = value;
		setData(result);
	};

	const onSave = async (data: any) => {
		const { _id, teams } = data;
		const result = await updateMatch({ _id, teams });
		fetchData();
	};
	return (
		<div className='flex p-10 flex-col'>
			<div className='pb-2 flex mb-3 font-poppins font-bold border-main border-b-4 w-36'>
				Torneos Activos
			</div>
			<div className='flex gap-5 flex-wrap'>
				{data.length &&
					data.map((item: any) => {
						return (
							<div
								key={item.group._id}
								className='mr-12 flex gap-5 flex-col font-poppins font-semibold from-neutral-900'
							>
								<div className='border-b-2 flex justify-center font-bold font-poppins border-main text-2xl'>
									{item.group.name}
								</div>
								{item &&
									item.matches &&
									item.matches.map((match: any) => {
										return (
											<div
												className='flex gap-5 border-b-2 border-main font-poppins text-lg py-2 align-middle'
												key={match._id}
											>
												<input
													className='w-10 justify-center flex text-center border-main border-2 rounded'
													defaultValue={match.teams[0].points}
													onChange={(e) =>
														onChange(
															0,
															e.target.value,
															item.group._id,
															match._id,
														)
													}
												/>

												<div className='flex w-20 text-center justify-center items-center mr-2'>
													{match.teams[0].name}
												</div>
												<div className='w-20 justify-center flex items-center cursor-pointer'>
													{match.teams[1].name}
												</div>
												<input
													className='w-10 justify-center flex text-center border-main border-2 rounded'
													defaultValue={match.teams[1].points}
													onChange={(e) =>
														onChange(
															1,
															e.target.value,
															item.group._id,
															match._id,
														)
													}
												/>
												<div className='flex w-24 text-center justify-center items-center'>
													{match.state}
												</div>
												<div
													onClick={() => onSave(match)}
													className='flex justify-center align-middle rounded-md border-2 border-main p-2 cursor-pointer'
												>
													Guardar
												</div>
											</div>
										);
									})}
							</div>
						);
					})}
			</div>
		</div>
	);
}

export async function getServerSideProps(context: any) {
	let groups = (await getGroups()).data.getGroups;
	const result = [];
	for (const group of groups) {
		const matches = await getMatches({ groupId: group._id });
		result.push({
			...group,
			matches: matches.data.getMatchs,
		});
	}
	return {
		props: {
			groups: result,
		},
	};
}
