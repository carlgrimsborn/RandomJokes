import { fireEvent, render, screen } from '@testing-library/react';
import ThemeButton from './ThemeButton';
import { useTheme } from 'next-themes';

jest.mock('next-themes', () => ({
	useTheme: jest.fn()
}));

const setThemeMock = jest.fn();

beforeEach(() => {
	jest.clearAllMocks();

	(useTheme as jest.Mock).mockReturnValue({
		resolvedTheme: 'light',
		setTheme: setThemeMock
	});

	document.documentElement.className = 'light';
});

test('ThemeButton changes the html class name', () => {
	render(<ThemeButton />);

	const button = screen.getByRole('button');
	fireEvent.click(button);

	expect(setThemeMock).toHaveBeenCalledWith('dark');
	document.documentElement.className = 'dark';
	expect(document.documentElement.className).toBe('dark');
});
