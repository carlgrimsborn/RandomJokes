export type IJokeType = 'single' | 'twopart';

export type IJokeCategory =
	| 'Programming'
	| 'Misc'
	| 'Dark'
	| 'Pun'
	| 'Spooky'
	| 'Christmas'
	| 'Any';

export interface IJoke {
	category: IJokeCategory;
	type: IJokeType;
	setup?: string;
	delivery?: string;
	joke?: string;
	flags: {
		nsfw: boolean;
		religious: boolean;
		political: boolean;
		racist: boolean;
		sexist: boolean;
		explicit: boolean;
	};
	id: number;
	safe: boolean;
	lang: string;
}

export interface JokeApiResponse {
	error: boolean;
	amount: number;
	jokes: IJoke[];
	message?: string;
	additionalInfo?: string;
}

export interface JokeApiSingleResponse extends IJoke {
	error: boolean;
	message?: string;
	additionalInfo?: string;
}
