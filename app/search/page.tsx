'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import JokeView from '../components/JokeView/JokeView';
import AmountDropDown from '../components/AmountDropDown/AmountDropDown';
import { useSearch } from './hooks/useSearch';

const page = () => {
	const { jokes, setSearchData, selectedAmount, setSelectedAmount } =
		useSearch();
	const inputRef = useRef<HTMLInputElement>(null);
	const amounts = [1, 3, 5, 7, 10];

	const onClickSearch = () => {
		setSearchData({
			searchString: inputRef.current ? inputRef.current.value : '',
			amount: selectedAmount ? selectedAmount : 0
		});
	};

	const onSelected = (amount: number) => {
		setSelectedAmount(amount);
	};

	return (
		<div className='flex flex-col'>
			<div className='flex flex-col space-y-4 p-4 items-center'>
				<div className='flex items-center space-x-2'>
					<Input
						type='search'
						placeholder='Search for a joke...'
						className='w-72'
						ref={inputRef}
					/>
					<AmountDropDown
						amountArray={amounts}
						onSelected={onSelected}
					/>
					<Button type='submit' onClick={onClickSearch}>
						Search
					</Button>
				</div>
			</div>
			{jokes ? <JokeView jokes={jokes} /> : <p>Loading...</p>}
		</div>
	);
};

export default page;
