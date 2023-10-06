import React from 'react';

export default function ModalProgram() {
	return (
		<>
			<button
				className="btn mr-2 border-0 bg-orange-500 text-white"
				onClick={() =>
					(
						document.getElementById('my_modal_1') as HTMLDialogElement
					).showModal()
				}
			>
				ЗА МЕН
			</button>
			<dialog
				id="my_modal_1"
				className="modalFadeIn modal modal-bottom sm:modal-middle"
			>
				<div className="modalFadeOut modal-box bg-gray-600 bg-opacity-80">
					<h3 className="text-md font-bold text-white lg:text-lg">ЗА МЕН</h3>
					<p className="py-4 text-white">
						Явявам се като независим кандидат и представител на свободната
						гражданска воля. Подкрепен съм от редица партии и организации, за
						което им благодаря. За мен всеки, вградил работния си делник в
						добруването на Банско, Добринище и селата, е достоен да бъде
						поздравен и уважаван. Ще работя с всички и ничие усилие няма да
						остане без признание, защото искам да сме един отбор. Помнете, че
						ако искате общината ни да се управлява прозрачно и ефективно, то
						мисията ни е да обединяваме всички около идеите си, а не да
						смразяваме хората и от съмишленици да ги превръщаме в противници.
						<br />
						ЗАЕДНО ДА ПРОДЪЛЖИМ И ДА НАДГРАДИМ!
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
