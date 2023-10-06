import Image from 'next/image';

export default function Bridge() {
	return (
		<div>
			<Image
				className="-mb-20 rounded-xl"
				src="/bridge.jpg"
				alt="KMET"
				width={500}
				height={700}
			/>
		</div>
	);
}
