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

export const SideBar = () => {
	const items = [
		{
			title: 'Programming',
			url: '#',
			icon: SquareCode
		},
		{
			title: 'Misc',
			url: '#',
			icon: SquareDashedBottom
		},
		{
			title: 'Dark',
			url: '#',
			icon: Skull
		},
		{
			title: 'Pun',
			url: '#',
			icon: Type
		},
		{
			title: 'Spooky',
			url: '#',
			icon: Ghost
		},
		{
			title: 'Christmas',
			url: '#',
			icon: CandyCane
		}
	];
	return (
		<Sidebar className='h-screen' collapsible='none'>
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Categories</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
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
