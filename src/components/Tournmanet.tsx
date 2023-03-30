import Image from 'next/image';
import Link from 'next/link';
import torneysIcon from '../../public/exampleTorneo.png';

export default function Tournament({ data }: { data: any[] }) {
	return (
		<div className='flex p-10 flex-col'>
			<div className='pb-2 flex mb-3 font-poppins font-bold border-main border-b-4 w-36'>
				Torneos Activos
			</div>
			{data.map((tournament) => {
				return (
					<Link
						href={`/tournament/${tournament._id}`}
						className='border-2 w-52 rounded-md p-5 no-underline font-poppins font-semibold text-main hover:text-main'
						key={tournament.name}
					>
						<div className='no-underline font-poppins font-semibold from-neutral-900'>
							<Image
								className='w-full'
								alt=''
								src={torneysIcon}
								width={50}
								height={70}
							/>
							<div className='text-bold no-underline font-poppins font-semibold'>
								{tournament.name}
							</div>
							<div className='no-underline font-poppins from-stone-400'>
								{tournament.date}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
