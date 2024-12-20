'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const ThemeButton = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	const toggleTheme = (currentTheme: string | undefined) => {
		if (currentTheme && currentTheme === 'dark') {
			setTheme('light');
		} else if (currentTheme === 'light') {
			setTheme('dark');
		} else {
			return null;
		}
	};

	return (
		<Button
			variant='outline'
			size='icon'
			onClick={() => toggleTheme(resolvedTheme)}
		>
			{resolvedTheme === 'dark' ? (
				<Sun />
			) : (
				<Moon className='text-black' />
			)}
		</Button>
	);
};

export default ThemeButton;
