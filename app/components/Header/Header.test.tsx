import { render, screen } from '@testing-library/react';
import Header from './Header'; // Adjust the import to the correct path

describe('Header', () => {
	const mockLinks = [{ name: 'Search', route: '/search' }];

	const renderHeader = () => render(<Header links={mockLinks} />);

	test('can render and navigate with props', () => {
		renderHeader();

		mockLinks.forEach((link) => {
			const navLink = screen.getByRole('link', { name: link.name });
			expect(navLink).toBeInTheDocument();
			expect(navLink).toHaveAttribute('href', link.route);
		});
	});

	test('contains correct structure', () => {
		renderHeader();

		const nav = screen.getByRole('navigation');
		expect(nav).toBeInTheDocument();

		const ul = screen.getByRole('list');
		expect(ul).toBeInTheDocument();
	});
});
