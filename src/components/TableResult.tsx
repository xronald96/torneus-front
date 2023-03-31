export default function TableResult({
	data,
}: {
	data: [
		{
			name: string;
			points: number;
			gf: number;
			ge: number;
			gd: number;
		},
	];
}) {
	return (
		<div className='font-poppins'>
			<div className='flex flex-col mt-5'>
				<div className='flex justify-center font-poppins font-semibold mb-3'>
					Clasificación
				</div>
				<div className='flex text-main p-3 '>
					<div className='flex w-20 items-center '>Pos</div>
					<div className='flex w-25 items-center '>Nombre</div>
					<div className='flex w-20 items-center '>Pts</div>
					<div className='flex w-20 items-center '>GF</div>
					<div className='flex w-20 items-center '>GE</div>
					<div className='flex w-20 items-center '>GD</div>
				</div>
				{data &&
					data.map((item, index: number) => {
						return (
							<div
								className='flex border-b-2 p-3 items-center border-main'
								key={index}
							>
								<div className='flex w-20 items-center'>{index + 1}</div>
								<div className='flex w-25 items-center'>{item.name}</div>
								<div className='flex w-20 items-center'>{item.points}</div>
								<div className='flex w-20 items-center'>{item.gf}</div>
								<div className='flex w-20 items-center'>{item.ge}</div>
								<div className='flex w-20 items-center'>{item.gd}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
