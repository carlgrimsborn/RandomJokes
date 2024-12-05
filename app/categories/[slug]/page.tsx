import { JokeApiResponse } from '@/app/types';
import React from 'react';
import { PageProps } from '../types';
import JokeView from '@/app/components/JokeView/JokeView';

async function fetchJokeCategory(category: string) {
	const response = await fetch(
		`https://v2.jokeapi.dev/joke/${category}?amount=10`
	);
	const data = await response.json();
	return data as JokeApiResponse;
}

const page: React.FC<PageProps> = async ({ params: { slug } }) => {
	const data = await fetchJokeCategory(slug);
	return (
		<div className='h-full flex flex-col items-center'>
			<h2 className='flex font-semibold text-lg mb-10'>{slug}</h2>
			<JokeView jokes={data.jokes} />
		</div>
	);
};

export default page;
