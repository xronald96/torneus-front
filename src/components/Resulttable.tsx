import 'bootstrap/dist/css/bootstrap.min.css';
import TableResult from './TableResult';

export default function ResultTable({ data }: any) {
	return (
		<div className='flex justify-center'>
			<div className='flex flex-col w-96'>
				<div className='mb- border-b-2 flex justify-center font-bold font-poppins border-main text-2xl'>
					{data.group.name}
				</div>
				{data.matches.map((item: any) => {
					return (
						<div key={item._id}>
							<div className='flex gap-5 border-b-2 border-main font-poppins text-lg py-2'>
								<div className='w-10 justify-center flex'>
									{item.teams[0].points}
								</div>
								<div className='w-25 justify-center flex'>{item.teams[0].name}</div>
								<div className='w-25 justify-center flex'>{item.teams[1].name}</div>
								<div className='w-10 justify-center flex'>
									{item.teams[1].points}
								</div>
							</div>
						</div>
					);
				})}
				<TableResult data={data.resultGroup} />
			</div>
		</div>
	);
}
