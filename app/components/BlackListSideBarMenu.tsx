'use client';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Flag } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Ref, useRef } from 'react';

interface IBlackListSideBarMenu {
	items: string[];
}

const BlackListSideBarMenu: React.FC<IBlackListSideBarMenu> = ({ items }) => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton>
							<Flag size={20} />
							Select
							<ChevronDown className='ml-auto' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-[--radix-popper-anchor-width] p-2 pt-0 pointer-events-none'>
						{items.map((item) => (
							<DropdownMenuItem
								key={item}
								className='flex-row space-x-1'
							>
								<Checkbox />
								<span>{item}</span>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default BlackListSideBarMenu;
