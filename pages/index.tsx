import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Bridge from '../components/Icons/Bridge';
import Logo from '../components/Icons/Logo';
import Modal from '../components/Modal';
import cloudinary from '../utils/cloudinary';
import getBase64ImageUrl from '../utils/generateBlurPlaceholder';
import type { ImageProps } from '../utils/types';
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto';
import ModalAbout from '../components/ModalAbout';
import ModalProgram from '../components/ModalProgram';
import ModalPriority from '../components/ModalPriority';
import ModalAnimation from '../components/ModalAnimation';

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
	const router = useRouter();
	const { photoId } = router.query;
	const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

	const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		// This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
		if (lastViewedPhoto && !photoId) {
			lastViewedPhotoRef.current.scrollIntoView({ block: 'center' });
			setLastViewedPhoto(null);
		}
	}, [photoId, lastViewedPhoto, setLastViewedPhoto]);

	return (
		<>
			<Head>
				<title>СТОЙЧО БАНЕНСКИ</title>
			</Head>
			<main className="mx-auto max-w-[1960px] p-4">
				{photoId && (
					<Modal
						images={images}
						onClose={() => {
							setLastViewedPhoto(photoId);
						}}
					/>
				)}
				<div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
					<div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
						<div className="absolute inset-0 flex items-center justify-center opacity-80">
							<span className="absolute bottom-0 flex max-h-full max-w-full items-center justify-center">
								<Bridge />
							</span>
						</div>

						<Logo />

						<p className="relative max-w-[40ch] text-sm font-bold text-black/75 sm:max-w-[32ch]">
							МЕСТНИ ИЗБОРИ 2023 - ГР. БАНСКО
						</p>
					</div>
					<div className="relative mb-2 text-center">
						<ModalAbout />
						<ModalProgram />
						<ModalPriority />
					</div>

					{images.map(({ id, public_id, format, blurDataUrl }) => (
						<Link
							key={id}
							href={`/?photoId=${id}`}
							as={`/p/${id}`}
							ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
							shallow
							className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
						>
							<Image
								alt="Next.js Conf photo"
								className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
								style={{ transform: 'translate3d(0, 0, 0)' }}
								placeholder="blur"
								blurDataURL={blurDataUrl}
								src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
								width={720}
								height={480}
								sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
							/>
						</Link>
					))}
				</div>
			</main>
			<footer className="bg-white p-6 text-center text-black  sm:p-12">
				КУПУВАНЕТО И ПРОДАВАНЕТО НА ГЛАСОВЕ Е ПРЕСТЪПЛЕНИЕ
			</footer>
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const results = await cloudinary.v2.search
		.expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
		.sort_by('public_id', 'desc')
		.max_results(400)
		.execute();
	let reducedResults: ImageProps[] = [];

	let i = 0;
	for (let result of results.resources) {
		reducedResults.push({
			id: i,
			height: result.height,
			width: result.width,
			public_id: result.public_id,
			format: result.format,
		});
		i++;
	}

	const blurImagePromises = results.resources.map((image: ImageProps) => {
		return getBase64ImageUrl(image);
	});
	const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

	for (let i = 0; i < reducedResults.length; i++) {
		reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
	}

	return {
		props: {
			images: reducedResults,
		},
	};
}
