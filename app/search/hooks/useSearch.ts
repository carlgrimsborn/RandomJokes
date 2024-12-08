import { IJoke } from '@/app/types';
import { useEffect, useState } from 'react';
import { SearchData } from '../types';
import { useToast } from '@/components/hooks/use-toast';

export const useSearch = () => {
	const [jokes, setJokes] = useState<IJoke[] | null>(null);
	const [searchData, setSearchData] = useState<SearchData | null>(null);
	const [selectedAmount, setSelectedAmount] = useState<number>(0);
	const { toast } = useToast();

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
					`https://v2.jokeapi.dev/joke/Any?safe-mode${searchUrl}${amountUrl}`,
					{ signal }
				);
				const result = await data.json();
				if (!result.error) {
					setJokes(result.jokes || [result]);
				} else {
					console.error('Error fetching jokes:', result);
					const errorTitle = result.message
						? result.message
						: 'There was an error';
					const errorDescription =
						result.additionalInfo && result.additionalInfo;
					toast({
						variant: 'destructive',
						title: errorTitle,
						description: errorDescription
					});
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

	return { jokes, setSearchData, selectedAmount, setSelectedAmount };
};
