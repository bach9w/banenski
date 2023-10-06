import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
					<meta property="og:site_name" content="stoichobanenski.com" />
					<meta
						property="og:description"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
					<meta
						property="og:title"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
					<meta
						name="twitter:card"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
					<meta
						name="twitter:title"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
					<meta
						name="twitter:description"
						content="СТОЙЧО БАНЕНСКИ - НЕЗАВИСИМ КАНДИДАТ КМЕТ ЗА ГР.БАНСКО"
					/>
				</Head>
				<body className="bg-gray-400 antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
