import Link from 'next/link';
import ThemeButton from '../ThemeButton/ThemeButton';
import { FC } from 'react';
import { IHeader } from './types';

const Header: FC<IHeader> = ({ links }) => {
	return (
		<header className='bg-headerBar text-white shadow-md'>
			<nav className='p-4 flex items-center justify-between'>
				<div className='flex items-center flex-row'>
					<Link
						className='flex items-center space-x-2 mr-10'
						href='/'
					>
						<span className='text-2xl'>😂</span>
						<span className='text-2xl font-bold text-yellow-400'>
							Random Jokes
						</span>
					</Link>

					<ul className='flex space-x-4'>
						{links.map((link) => (
							<li key={link.name}>
								<Link
									href={link.route}
									className='hover:text-gray-400'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<ThemeButton />
			</nav>
		</header>
	);
};

export default Header;
