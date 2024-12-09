'use client';
import { FC, useContext } from 'react';
import { IActionButton } from './types';
import { JokeContext } from '@/app/context';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/hooks/use-toast';

const ActionButton: FC<IActionButton> = ({ joke }) => {
	const { setSavedJoke, removeSavedJoke, savedJokes } =
		useContext(JokeContext);
	const { toast } = useToast();
	const onClickSave = () => {
		setSavedJoke(joke);
		toast({
			title: 'Joke saved!',
			description: 'check the Saved tab'
		});
	};
	const onClickRemove = () => {
		removeSavedJoke(joke);
		toast({
			title: 'Joke Removed from saved'
		});
	};
	const alreadySaved =
		savedJokes.filter((savedJoke) => savedJoke.id === joke.id).length > 0;
	return (
		<div className='top-2 right-2 absolute'>
			{alreadySaved ? (
				<Button onClick={onClickRemove}>Remove</Button>
			) : (
				<Button onClick={onClickSave}>Save</Button>
			)}
		</div>
	);
};

export default ActionButton;
