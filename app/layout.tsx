import '../globals.css';
import Providers from './providers';
import Header from './components/Header';
import { SideBar } from './components/SideBar/Sidebar';
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
					<SidebarProvider className='flex-col'>
						<Header />
						<div className='flex'>
							<SideBar />
							<main className='flex-grow p-4 h-[calc(100vh-70px)] flex items-center justify-center'>
								{children}
							</main>
						</div>
					</SidebarProvider>
				</Providers>
			</body>
		</html>
	);
}
