import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../../search/page';

test('AmountDropDown can select a value and display it', async () => {
	const user = userEvent.setup();
	render(<Page />);
	const dropDownButton = screen.getByRole('button', {
		name: /Amount/i
	});
	user.click(dropDownButton);
	await waitFor(() => {
		const menuItem = screen.getByText(/5/i);
		user.click(menuItem);
		const dropDownButtonUpdated = screen.getByRole('button', {
			name: /Amount: 5/i
		});
		expect(dropDownButtonUpdated).toBeInTheDocument();
	});
});
