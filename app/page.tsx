import Link from 'next/link';
import Counter from './components/counter';
import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<div>
			<h1>App Router</h1>
			<Link href='/home'>Link</Link>
			<Counter />
			<Button variant='outline'>Button</Button>
		</div>
	);
}
