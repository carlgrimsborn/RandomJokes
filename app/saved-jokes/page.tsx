'use client';

import { FC, useContext } from 'react';
import { JokeContext } from '../context';
import JokeView from '../components/JokeView/JokeView';
import { Label } from '@/components/ui/label';

const page: FC = () => {
	const { savedJokes } = useContext(JokeContext);
	return (
		<div className='h-full flex flex-col items-center '>
			<h2 className='flex font-semibold text-lg mb-10'>Saved Jokes</h2>
			{savedJokes.length > 0 ? (
				<JokeView jokes={savedJokes} />
			) : (
				<Label>No saved jokes</Label>
			)}
		</div>
	);
};

export default page;
