'use client';
import { FC, useEffect } from 'react';
import { useToast } from '@/components/hooks/use-toast';
import { IErrorComponent } from './types';

const ErrorComponent: FC<IErrorComponent> = ({ title, description }) => {
	const { toast } = useToast();
	useEffect(() => {
		if (title) {
			toast({
				variant: 'destructive',
				title,
				description: description && description
			});
		}
	}, [toast, title, description]);

	return <>{!title && <p className='text-red-600'>There was an Error</p>}</>;
};

export default ErrorComponent;
