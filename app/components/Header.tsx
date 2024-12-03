import Link from 'next/link';
import ThemeButton from './ThemeButton';

const Header = () => {
	return (
		<header className='bg-gray-800 text-white shadow-md'>
			<nav className='container mx-auto p-4 flex items-center justify-between'>
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
						<li>
							<Link
								href='/blog/7'
								className='hover:text-gray-400'
							>
								Go to Screen
							</Link>
						</li>
						<li>
							<Link href='/' className='hover:text-gray-400'>
								Main
							</Link>
						</li>
						<li>
							<Link href='/home' className='hover:text-gray-400'>
								Home
							</Link>
						</li>
						<li>
							<Link href='/extra' className='hover:text-gray-400'>
								Extra
							</Link>
						</li>
					</ul>
				</div>
				<ThemeButton />
			</nav>
		</header>
	);
};

export default Header;
