import JokeView from './components/JokeView/JokeView';
import { JokeApiSingleResponse } from './types';

async function fetchJokes() {
	const response = await fetch(
		'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist'
	);
	const data = await response.json();
	return data as JokeApiSingleResponse;
}

export default async function Page() {
	const data = await fetchJokes();
	console.log(data);
	return (
		<div className='flex flex-col items-center'>
			<h3 className='text-lg font-bold mb-6'>Random joke:</h3>
			<JokeView jokes={[data]} />
		</div>
	);
}
