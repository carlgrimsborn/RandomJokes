export type HeaderLink = {
	name: string;
	route: string;
};

export interface IHeader {
	links: HeaderLink[];
}
