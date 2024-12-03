import Link from 'next/link';
import './globals.css';
import Providers from './providers';

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
					<header>
						<nav>
							<ul>
								<li>
									<Link href='/blog/7'>Go to Screen</Link>
								</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
							</ul>
						</nav>
					</header>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
