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
	Ghost
} from 'lucide-react';
import { useState } from 'react';
import BlackListSideBarMenu from './BlackListSideBarMenu';

export const SideBar = () => {
	const [currentSelected, setCurrentSelected] = useState<number | null>(null);

	const items = [
		{
			title: 'Programming',
			url: '#programming',
			icon: SquareCode
		},
		{
			title: 'Misc',
			url: '#misc',
			icon: SquareDashedBottom
		},
		{
			title: 'Dark',
			url: '#dark',
			icon: Skull
		},
		{
			title: 'Pun',
			url: '#pun',
			icon: Type
		},
		{
			title: 'Spooky',
			url: '#spooky',
			icon: Ghost
		},
		{
			title: 'Christmas',
			url: '#christmas',
			icon: CandyCane
		}
	];

	const blackListItems = [
		'nsfw',
		'religious',
		'political',
		'racist',
		'sexist',
		'explicit'
	];

	return (
		<Sidebar className='h-screen' collapsible='none'>
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
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarGroup className='p-0 pt-1'>
						<SidebarGroupLabel>BlackList flags</SidebarGroupLabel>
						<BlackListSideBarMenu items={blackListItems} />
					</SidebarGroup>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};
