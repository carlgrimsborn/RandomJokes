import Link from 'next/link';
import '../globals.css';
import Providers from './providers';
import Header from './components/Header';
import { SideBar } from './components/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

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
		<html lang='en' suppressHydrationWarning>
			<body>
				<Providers>
					<Header />
					<SidebarProvider className='flex flex-row'>
						<SideBar />
						<main className='container mx-auto p-4'>
							{children}
						</main>
					</SidebarProvider>
				</Providers>
			</body>
		</html>
	);
}
