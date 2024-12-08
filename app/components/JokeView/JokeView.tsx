import { IJokeView } from './types';

const JokeView: React.FC<IJokeView> = ({ jokes }) => {
	return (
		<div className='flex rounded-lg shadow-md p-6 border-2 w-full'>
			<ul className='space-y-4 flex-col flex items-center w-full'>
				{jokes.map((joke) =>
					joke.type === 'single' ? (
						<li
							className='bg-accent p-10 rounded-md flex w-full max-w-4xl flex-col'
							key={joke.id}
						>
							<p className='text-center' role='banner'>
								{joke.joke}
							</p>
						</li>
					) : (
						<li
							className='bg-accent p-10 rounded-md flex w-full max-w-4xl flex-col'
							key={joke.id}
						>
							<h1 className='font-medium mb-2 text-center'>
								{joke.setup}
							</h1>
							<p className='text-center' role='banner'>
								{joke.delivery}
							</p>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default JokeView;
