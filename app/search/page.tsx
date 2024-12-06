'use client';

import { useEffect, useRef, useState } from 'react';
import { IJoke } from '../types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import JokeView from '../components/JokeView/JokeView';
import AmountDropDown from '../components/AmountDropDown/AmountDropDown';
import { SearchData } from './types';

const page = () => {
	const [jokes, setJokes] = useState<IJoke[] | null>(null);
	const [searchData, setSearchData] = useState<SearchData | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [selectedAmount, setSelectedAmount] = useState<number>(0);

	const amounts = [1, 3, 5, 7, 10];

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const amountUrl = searchData?.amount
			? '&amount=' + searchData.amount
			: '';
		const searchUrl = searchData?.searchString
			? '&contains=' + searchData.searchString
			: '';
		const fetchData = async () => {
			try {
				const data = await fetch(
					`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist${searchUrl}${amountUrl}`,
					{ signal }
				);
				const result = await data.json();
				if (!result.error) {
					setJokes(result.jokes || [result]);
				} else {
					console.error('Error fetching jokes:', result);
				}
			} catch (error) {
				if ((error as DOMException).name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error('Failed to fetch:', error);
				}
			}
		};
		fetchData();
		return () => {
			controller.abort();
		};
	}, [searchData]);

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
			{jokes ? <JokeView jokes={jokes} /> : <p>no jokes found</p>}
		</div>
	);
};

export default page;
