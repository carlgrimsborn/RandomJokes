import { JokeApiResponse } from '@/app/types';
import React from 'react';
import { PageProps } from '../types';
import JokeView from '@/app/components/JokeView/JokeView';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

async function fetchJokeCategory(category: string, safeMode: boolean) {
	const response = await fetch(
		`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,racist&amount=10${
			safeMode && '&safe-mode'
		}`
	);
	const data = await response.json();
	return data as JokeApiResponse;
}

const page: React.FC<PageProps> = async ({ params: { slug } }) => {
	const data = await fetchJokeCategory(slug, slug !== 'Dark');
	console.log(data);
	return (
		<div className='h-full flex flex-col items-center '>
			<h2 className='flex font-semibold text-lg mb-10'>{slug}</h2>
			<JokeView jokes={data.jokes} />
			{data.error && (
				<ErrorComponent
					title={data.message && data.message}
					description={data.additionalInfo && data.additionalInfo}
				/>
			)}
		</div>
	);
};

export default page;
