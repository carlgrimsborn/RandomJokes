import { createContext, FC, ReactNode, useReducer } from 'react';
import { IJoke, ReducerAction, ReducerState } from './types';

const defaultValues: {
	savedJokes: IJoke[];
	setSavedJoke: (joke: IJoke) => void;
	removeSavedJoke: (joke: IJoke) => void;
} = {
	savedJokes: [],
	setSavedJoke: () => {},
	removeSavedJoke: () => {}
};
export const JokeContext = createContext(defaultValues);

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
	switch (action.type) {
		case 'add':
			return {
				savedJokes: [...state.savedJokes, action.payload]
			};
		case 'remove':
			return {
				savedJokes: state.savedJokes.filter(
					(joke) => joke.id !== action.payload.id
				)
			};
		default:
			return {
				savedJokes: state.savedJokes
			};
	}
};

export const JokeContextProvider: FC<{ children: ReactNode }> = ({
	children
}) => {
	const [state, dispatch] = useReducer(reducer, defaultValues);
	return (
		<JokeContext.Provider
			value={{
				savedJokes: state.savedJokes,
				setSavedJoke: (joke) =>
					dispatch({ payload: joke, type: 'add' }),
				removeSavedJoke: (joke) =>
					dispatch({ payload: joke, type: 'remove' })
			}}
		>
			{children}
		</JokeContext.Provider>
	);
};
