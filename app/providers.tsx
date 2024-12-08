'use client';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider attribute='class'>
			<SidebarProvider className='flex-col'>{children}</SidebarProvider>
			<Toaster />
		</ThemeProvider>
	);
};

export default Providers;
