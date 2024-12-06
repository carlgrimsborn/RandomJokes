'use client';

import { useState, FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { IAmountDropDown } from './types';

const AmountDropDown: FC<IAmountDropDown> = ({ amountArray, onSelected }) => {
	const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

	const onChecked = (checkedValue: number) => {
		setSelectedAmount(checkedValue);
	};

	useEffect(() => {
		if (selectedAmount) {
			onSelected(selectedAmount);
		}
	}, [selectedAmount]);

	const currentAmount = selectedAmount ? ': ' + selectedAmount : '';

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>Amount{currentAmount}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-8'>
				{amountArray.map((amount) => (
					<DropdownMenuCheckboxItem
						checked={selectedAmount === amount}
						onCheckedChange={() => onChecked(amount)}
						key={amount}
					>
						{amount}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AmountDropDown;
