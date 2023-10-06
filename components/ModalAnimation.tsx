import React, { useState, useEffect } from 'react';

export default function ModalAnimation() {
	const [isVisible, setIsVisible] = useState(false);
	const [modalClass, setModalClass] = useState('bondJamesBond');
	const [backgroundClass, setBackgroundClass] = useState('modalFadeIn');

	const showModal = () => {
		setIsVisible(true);
		setModalClass('bondJamesBond');
		setBackgroundClass('modalFadeIn');
	};

	const closeModal = () => {
		setModalClass('killShot');
		setBackgroundClass('modalFadeOut');
		setTimeout(() => {
			setIsVisible(false);
		}, 1000); // Затваря модала след 1 секунда
	};

	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				closeModal();
			}, 5000); // Затваря модала след 5 секунди

			return () => clearTimeout(timer);
		}
	}, [isVisible]);

	return (
		<>
			<button onClick={showModal}>ЗА МЕН</button>
			{isVisible && (
				<div className={`modal-background ${backgroundClass}`}>
					<div className={`modal ${modalClass}`}>
						<h2>ЗА МЕН</h2>
						<p>Текст за модалния прозорец...</p>
						<button onClick={closeModal}>Затвори</button>
					</div>
				</div>
			)}
		</>
	);
}
