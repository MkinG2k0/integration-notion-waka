import { ModeToggle } from 'entities/layout/ui/toggle-theme'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from 'shared/ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from 'shared/ui/avatar'
import { Command, CommandGroup, CommandItem } from 'shared/ui/command'
import { NAV } from 'shared/constant/nav'
import { Button } from 'shared/ui/button'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className={'row justify-between h-14 items-center border-b  px-4 py-2 text-accent-foreground'}>
			<Menu />
			<div className={'row gap-4 items-center'}>
				<ModeToggle />
				<UserAvatar />
			</div>
		</div>
	)
}

const UserAvatar = () => {
	const { data: session, status } = useSession()
	const image = session?.user?.image || ''
	const name = (session?.user?.name || '').slice(0, 2)

	const onSignOut = () => {
		signOut({ callbackUrl: '/' })
	}

	const onSignIn = () => {
		signIn('notion', { callbackUrl: '/settings' })
	}

	if (status === 'loading') {
		return null
	}
	if (status === 'unauthenticated') {
		return <Button onClick={onSignIn}>Sign in</Button>
	}

	return (
		<Popover>
			<PopoverTrigger>
				<Avatar>
					<AvatarImage src={image} />
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			</PopoverTrigger>
			<PopoverContent>
				<Command>
					<CommandGroup heading={'Settings'}>
						<CommandItem>Profile</CommandItem>
						<CommandItem>Settings</CommandItem>
					</CommandGroup>
					<CommandItem onSelect={onSignOut}>Out</CommandItem>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

const Menu = () => {
	const { status } = useSession()
	const authenticated = status === 'authenticated'

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href={NAV.MAIN} legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Main</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{authenticated && (
					<>
						<NavigationMenuItem>
							<Link href={NAV.DASHBOARD} legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href={NAV.SETTINGS} legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Settings</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</>
				)}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
