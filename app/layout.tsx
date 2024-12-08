import '../globals.css';
import Providers from './providers';
import Header from './components/Header/Header';
import { SideBar } from './components/SideBar/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { HeaderLink } from './components/Header/types';

export const metadata = {
	title: 'Random Jokes',
	description: 'A fun app for browsing jokes'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const headerLinks: HeaderLink[] = [
		{
			name: 'Search',
			route: '/search'
		}
	];
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<Providers>
					<Header links={headerLinks} />
					<div className='flex'>
						<SideBar />
						<main className='flex-grow p-4 h-[calc(100vh-70px)] flex justify-center overflow-y-scroll'>
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
