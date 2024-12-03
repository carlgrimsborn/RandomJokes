/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import Page from 'app/home/page';

it('renders homepage unchanged', () => {
	const { container } = render(<page />);
	expect(container).toMatchSnapshot();
});
