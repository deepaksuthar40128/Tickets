"use client"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut, 
    Plus, 
    User, 
    Users,
    Sun,
    Moon,
    Laptop2,
    Check,
    LogIn
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeContext } from "@/context/themeContext"
import { Dispatch, useContext } from "react"
import Link from "next/link"

type ActionType = { type: string };
type ThemeType = { value: boolean, name: string };
export function DropdownMenuDemo() {
    const { theme, dispatch }: { theme: ThemeType, dispatch: Dispatch<ActionType> } = useContext(ThemeContext);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="destructive" className="p-0 m-0 h-max font-medium !ring-0 !ring-offset-0 select-none text-gray-900 dark:text-white hover:underline">Settings</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white dark:text-white dark:border-0 dark:bg-gray-800">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/login' className="flex w-full">
                            <LogIn className="mr-2 h-4 w-4" />
                            <span>Login</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard className="mr-2 h-4 w-4" />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Sun className="mr-2 h-4 w-4" />
                            <span>Theme</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-white  dark:text-white dark:border-0 dark:bg-gray-800">
                                <DropdownMenuItem>
                                    <Sun className="mr-2 h-4 w-4 " />
                                    <span onClick={() => dispatch({ type: 'Light' })} >Light</span>
                                    {
                                        theme.name === 'Light' &&
                                        <Check className="mx-2 h-4 w-4 " />
                                    }
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Moon className="mr-2 h-4 w-4" />
                                    <span onClick={() => dispatch({ type: 'Dark' })}>Dark</span>
                                    {
                                        theme.name === 'Dark' &&
                                        <Check className="mx-2 h-4 w-4 " />
                                    }
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Laptop2 className="mr-2 h-4 w-4" />
                                    <span onClick={() => dispatch({ type: 'System' })}>System</span>
                                    {
                                        theme.name === 'System' &&
                                        <Check className="mx-2 h-4 w-4 " />
                                    }
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
