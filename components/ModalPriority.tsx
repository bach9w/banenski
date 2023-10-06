import React from 'react';

export default function ModalPriority() {
	return (
		<>
			<button
				className="btn mr-2 mt-1 border-0 bg-orange-500 text-white"
				onClick={() =>
					(
						document.getElementById('my_modal_3') as HTMLDialogElement
					).showModal()
				}
			>
				ПРИОРИТЕТНА ПРОГРАМА
			</button>
			<dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-80">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ПРИОРИТЕТИ НА МАНДАТА
					</h3>

					<button
						className="btn border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_4') as HTMLDialogElement
							).showModal()
						}
					>
						ПРИЕМСТВЕНОСТ НА УПРАВЛЕНИЕТО
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_5') as HTMLDialogElement
							).showModal()
						}
					>
						ДОСТЪПНА И ОТГОВОРНА ОБЩИНА
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_6') as HTMLDialogElement
							).showModal()
						}
					>
						БАНСКО - ЦЕЛОГОДИШНА ТУРИСТИЧЕСКА И СПОРТНА ДЕСТИНАЦИЯ
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_7') as HTMLDialogElement
							).showModal()
						}
					>
						ЗДРАВЕОПАЗВАНЕ И СОЦИАЛНА ПОЛИТИКА
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_8') as HTMLDialogElement
							).showModal()
						}
					>
						ОБРАЗОВАНИЕ И МЛАДЕЖ
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_9') as HTMLDialogElement
							).showModal()
						}
					>
						БИЗНЕС, ИКОНОМИКА, ИНВЕСТИЦИИ
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_10') as HTMLDialogElement
							).showModal()
						}
					>
						ОБЛАГОРОДЯВАНЕ НА ГРАДСКАТА СРЕДА
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_11') as HTMLDialogElement
							).showModal()
						}
					>
						ЕКОЛОГИЯ В ПОЛЗА НА ХОРАТА
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_12') as HTMLDialogElement
							).showModal()
						}
					>
						ЦЕНТЪР НА ДУХОВНО ОБЩУВАНЕ И РАЗВИТИЕ
					</button>
					<button
						className="btn mt-2 border-0 bg-orange-700 text-white"
						onClick={() =>
							(
								document.getElementById('my_modal_13') as HTMLDialogElement
							).showModal()
						}
					>
						СИГУРНОСТ И СПОКОЙСТВИЕ НА ГРАЖДАНИТЕ
					</button>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ПРИЕМСТВЕНОСТ НА УПРАВЛЕНИЕТО
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаване и надграждане на добрите практики от предходните
						мандати;
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						доразвиване на всички проекти в процес на изпълнение;
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						последователни стъпки за изпълнение на Плана за интегрирано развитие
						на община Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						активно използване на всички възможности за европейско и национално
						финансиране на общински проекти
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ДОСТЪПНА И ОТГОВОРНА ОБЩИНА
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						любезно и отговорно отношение към гражданите, спазване на нормативно
						въведените срокове за отговор
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						постепенно въвеждане на принципи на "мълчаливото съгласие" при липса
						на официален отговор от общинските власи на писмено или електронно
						запитване съгласно нормативните срокове
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаване на въведената практика за дигитализация на
						административните услуги
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						създаване на Общински контролен център за докладване на нередности,
						пропуски или проблеми от общински характер със задължение за отговор
						от властите до 48 часа
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						БАНСКО - ЦЕЛОГОДИШНА ТУРИСТИЧЕСКА И СПОРТНА ДЕСТИНАЦИЯ
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						прилагане на дългосрочна рекламна стратегия за популяризиране на
						бранда на община Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаващи целенасочени усилия за утвърждаване на Община Банско
						като ЦЕЛОГОДИШНА ТУРИСТИЧЕСКА И СПОРТНА ДЕСТИНАЦИЯ - създаване на
						трайни ТУРИСТИЧЕСКи продукти извън активния зимен сезон
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на велоалеи, спортна и атракционна инфраструктура за
						Банско и добринище, вкл. веломаршрути (до параклис "св.кузма и
						дамян", свързващи двата града през местността св. никола и др.)
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на футболни игрища за привличане на отбори за целогодишна
						спортно-техническа подготовка
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						планиране на мултифункционална спортна зала
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						осигуряване на условия и възможности за организиране на
						републикански и международни турнири
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изработване и реализация на концепция за развитие на
						балнеолечебницата в град добринище
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ЗДРАВЕОПАЗВАНЕ И СОЦИАЛНА ПОЛИТИКА
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						оптимизиране на социалните институции на територията на община
						Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						създаване на програма за адекватна подкрепа на социално слаби и
						уязвими групи от населението
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подобряване условията за предоставяне на спешни и специализирани
						медицински услуги на територията на общината
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подпомагане на екипите за неотложна помощ в логистично и кадрово
						отношение
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						осигуряване на специализиран транспорт до реанимация при спешни
						медицински случаи
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ОБРАЗОВАНИЕ И МЛАДЕЖ
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						експертна оценка на всички степени на образование и училищни
						институции в община Банско, следване на политика за качествено и
						съвременно образование и увеличаване броя на учащите в училищата на
						територията на общината
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						мерки за максимално обвързване на образованието и местния бизнес
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						ангажиране на бизнеса за обучение на кадри в съответните
						професионални области
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						създаване на младежки бизнес съвет "иновации", изграждане на
						стратегия и подкрепа на идеите на младите хора в община Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						непрекъсната работа за уютни детски градини и качествени грижи за
						нашите деца
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подпомагане на извънучилищните форми на работа с деца и ученици
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаване на добрите практики и търсене на нови източници за
						подпомагане и развитие на масовия спорт
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						осигуряване на база и привличане на държавни, частни и международни
						образователни центрове, училища, колежи и др.
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_9" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						БИЗНЕС, ИКОНОМИКА, ИНВЕСТИЦИИ
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						планиране и изграждане на нови индустриални зони в банско и
						добринище
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изпълнение на приетата "стратегия за развитие на туризма в община
						банско" за създаване на конкурентна среда за хотелиерским
						ресторантьоски и обслужващ бизнес в града
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						създаване на облекчени условия за стартиращи малки и средни бизнеси
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						стимулиране на развитието на дигитални и високотехнологични бизнеси
						идеи
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						създаване и популяризиране на платформа "дигитално банско"
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						стратегия за въвеждане на публичен електротранспорт, нови паркинги и
						паркоместа
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						нова визия и оптимизация на пространството на пазара на банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подобряване условията за развитие на земеделие и животновъдство, в
						т.ч. поддържане на полски пътища, възстановяване и поддържане на
						вади за напояване
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						развитие на ски зона добринище
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						поддържане на пряка връзка с експлоатационните дружества за
						съдействие на граждани и фирми при изграждането на собствени мерки
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						проектиране на устройствени планове за неурегулирани територии в
						границите на населените места
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						ново водохващане, нов довеждащ водопровод и нови сондажи за
						минерална вода в добринище
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на стоманобетонови стени по коритото на р. Десилица в гр.
						Добринище и на р. градинишка в с. филипово
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						довършване на корекция на коритото на р. Глазне в гр. Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						промяна на оупо - гр. добринище, с цел увеличаване броя на
						урегулираните имоти и привличане на бъдещи инвеститори
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на улица за достъп покрай р. градинишка в с. филипово
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ОБЛАГОРОДЯВАНЕ НА ГРАДСКАТА СРЕДА
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						ясна и открита политика към собствениците на недовършени сгради за
						довършването им и въвеждане в експлоатация или премахване за тяхна
						сметка
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаване на политиката за ремонт и рехабилитация на улични и
						площадни пространства и създаване на нови такива във всички селища
						от община Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						работа за подобряване водоснабдяването във всички населени места
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на улично осветление на модерен екологичен принцип и
						въвеждане на принципа на гражданския контрол върху неработещи
						осветителни тела с реакция до 24 часа
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на обреден дом и разширение на гробищния парк на гр.
						Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						цялостна система за обозначаване на улици, площади и обекти от
						културно-историческата инфраструктура
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подобряване достъпа към селата, планинските райони и курортните зони
						в банско и добринище
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						облагородяване и обогатяване на градския парк в гр. Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						доизграждане на инфраструктурата на промишлените зони
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						разширение на уличната мрежа на новите квартали в гр. банско и
						осигуряване на съпътстваща инфраструктура - улично осветление,
						водопровод, канализация, газифициране и други.
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане и ремонт на улици, водопроводи и улично осветление в
						селата на община Банско
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ЕКОЛОГИЯ В ПОЛЗА НА ХОРАТА
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подкрепа за използването на нисковъглеродни енергоизточници и
						разработване на стратегия с европейски опит и средства за постепенно
						отпадане на отоплението на твърдо гориво и замяната му с екологични
						суровини
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						кампания "добрият опит" за привличане на домакинства, които да
						ползват експретна помощ от общината за преминаване към екологично
						отопление и въвеждане на данъчни облекчения за тези домакинства
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на веи и прилагане на мерки за енергийна ефективност на
						общински сгради
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						анализ и създаване на концепция за управление на отпадъците,
						съобразно европейските норми и практики
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						оптимизиране работата на топлоцентралата в гр. банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						разширено и разумно използване на минералните извори в гр. добринище
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						увеличаване на зелените площи в общината, вкл. планиране на паркове
						и зелени площи в новите жилищни части
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						непрестанна работа за изграждане на втора кабинка и ограничаване
						движението на мпс в нп "пирин"
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_12" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						ЦЕНТЪР НА ДУХОВНО ОБЩУВАНЕ И РАЗВИТИЕ
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						поддържане и възраждане на традициите в община Банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						стимулиране работата на народните читалища и самодейните състави в
						община банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						обогатяване на лятната културна програма, в т.ч. създаване и
						развитие на нова основна фестивална атракция, която да привлече
						посетители и зрители за удължаване на летния сезон
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						изграждане на зала за фестивална и масова дейност
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						цялостен експертен план за възстановяване и саниране на историческия
						център на гр. банско
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						издигане паметник на героите, загинали за банско и борбите за
						национално освобождение и войните и поставяне на паметен знак на
						територията на бившия танков полк
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						консервация и социализация на обектите на недвижимото културно
						наследство и популяризиране на археологическите атракции
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						развитие на районите около местностите "Ситан кале", "Св. димитър" и
						"св. Никола", - археология, атракции и др., и популяризиране на
						скални ансамбли "сватбата" (с. осеново) и "кара кая" (с. гостун)
					</p>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">ЗАТВОРИ</button>
						</form>
					</div>
				</div>
			</dialog>
			<dialog id="my_modal_13" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box bg-gray-600 bg-opacity-100">
					<h3 className="text-md font-bold text-white lg:text-lg">
						СИГУРНОСТ И СПОКОЙСТВИЕ
					</h3>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						подобряване на работата на звеното по обществен ред и сигурност
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						продължаване работата за създаване ред и алтернативни форми за
						паркиране на мпс
					</p>
					<p className="rounded-lg py-4 text-center uppercase text-white hover:bg-orange-900">
						работа за осигуряване на защита на речните корита и свлачища
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
