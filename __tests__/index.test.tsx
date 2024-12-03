/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Page from 'app/home/page';

describe('Home', () => {
	it('renders a heading', () => {
		render(<page />);

		const heading = screen.getByRole('heading', {
			name: /welcome to next\.js!/i
		});

		expect(heading).toBeInTheDocument();
	});
});
