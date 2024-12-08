import { render, screen } from '@testing-library/react';
import React from 'react';
import JokeView from './JokeView';
import { IJoke } from '@/app/types';

describe('JokeView', () => {
	const mockJokes: IJoke[] = [
		{
			id: 1,
			type: 'single',
			joke: 'joke-example',
			category: 'Any',
			flags: {
				explicit: false,
				nsfw: false,
				political: false,
				racist: false,
				religious: false,
				sexist: false
			},
			lang: 'en',
			safe: true
		},
		{
			id: 2,
			type: 'twopart',
			setup: 'setup-example',
			delivery: 'delivery-example',
			category: 'Any',
			flags: {
				explicit: false,
				nsfw: false,
				political: false,
				racist: false,
				religious: false,
				sexist: false
			},
			lang: 'en',
			safe: true
		}
	];

	test('can render a single-type joke', () => {
		render(<JokeView jokes={[mockJokes[0]]} />);
		const jokeElement = screen.getByText(/joke-example/i);
		expect(jokeElement).toBeInTheDocument();
	});

	test('can render twopart-type joke', () => {
		render(<JokeView jokes={[mockJokes[1]]} />);
		const setupElement = screen.getByText(/setup-example/i);
		const deliveryElement = screen.getByText(/delivery-example/i);

		expect(setupElement).toBeInTheDocument();
		expect(deliveryElement).toBeInTheDocument();
	});

	test('renders no jokes when the array is empty', () => {
		render(<JokeView jokes={[]} />);
		const list = screen.getByRole('list');
		expect(list).toBeEmptyDOMElement();
	});
});
