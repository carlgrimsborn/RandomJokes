import Link from 'next/link';
import Counter from './components/counter';

export default function Page() {
	return (
		<div>
			<h1>App Router</h1>
			<Link href='/home'>Link</Link>
			<Counter />
		</div>
	);
}
