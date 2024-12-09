'use client';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar';

import {
	CandyCane,
	SquareCode,
	SquareDashedBottom,
	Skull,
	Type,
	Ghost,
	Dices
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { IItems } from './types';

export const SideBar = () => {
	const [currentSelected, setCurrentSelected] = useState<number | null>(null);

	const items: IItems[] = [
		{
			title: 'Programming',
			icon: SquareCode
		},
		{
			title: 'Misc',
			icon: SquareDashedBottom
		},
		{
			title: 'Pun',
			icon: Type
		},
		{
			title: 'Spooky',
			icon: Ghost
		},
		{
			title: 'Christmas',
			icon: CandyCane
		},
		{
			title: 'Dark',
			icon: Skull
		},
		{
			title: 'Any',
			icon: Dices
		}
	];

	return (
		<Sidebar className='h-[calc(100vh-70px)]' collapsible='none'>
			<SidebarHeader className='text-center mt-3'>
				Categories
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Browse Categories</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item, i) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={
											!!currentSelected &&
											currentSelected === i + 1
										}
										onClick={() =>
											setCurrentSelected((prev) =>
												prev === i + 1 ? null : i + 1
											)
										}
									>
										<Link
											href={`/categories/${item.title}`}
										>
											<item.icon />
											<p>{item.title}</p>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};
