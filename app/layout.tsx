import Link from 'next/link';
import '../globals.css';
import Providers from './providers';
import Header from './components/Header';

export const metadata = {
	title: 'Random Jokes',
	description: 'A fun app for browsing jokes'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Header />
					<main className='container mx-auto p-4'>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
