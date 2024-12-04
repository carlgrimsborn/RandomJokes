'use client';

import { useState } from 'react';

const Page = () => {
	const [s, ss] = useState(0);
	return (
		<div className='p-3 m-3 bg-slate-300'>
			<p>Home</p>
		</div>
	);
};

export default Page;
