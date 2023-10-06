import Image from 'next/image';
import Bulletin from './Bulletin';
import HeaderText from './HeaderText';

export default function Logo() {
	return (
		<>
			<Image
				className="absolute top-2 rounded-xl"
				src="/stoicho.png"
				alt="KMET"
				width={300}
				height={300}
			/>
			<a className="pointer  hover:bg-red/10 relative -top-10 z-10 mb-1 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white md:mt-4">
				КАНДИДАТ ЗА КМЕТ НА БАНСКО
			</a>
			<HeaderText />
			<Bulletin />
		</>
	);
}
