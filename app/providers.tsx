'use client';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { JokeContextProvider } from './context';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider attribute='class'>
			<JokeContextProvider>
				<SidebarProvider className='flex-col'>
					{children}
				</SidebarProvider>
			</JokeContextProvider>
			<Toaster />
		</ThemeProvider>
	);
};

export default Providers;
