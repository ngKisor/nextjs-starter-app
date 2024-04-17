import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";


const NavBar = () => {
    const { user } = useUser();
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://www.cdnlogo.com/logos/n/80/next-js.svg" className="h-8" alt="Next Logo " />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Next Starter App</span>
                </Link>
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/profile" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Admin
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/auth/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Log In
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Sign Up
                            </Link>
                        </li>   
                        <li>
                            <Link href="/api/auth/logout" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

    // return (
    //     <NavigationMenuItem>
    //         {!user && (
    //             <>
    //                 <NavigationMenuItem>
    //                     <Link href={!user ? "/api/auth/login" : "/api/auth/logout"} passHref>
    //                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                             <Button asChild>
    //                                 {!user ? "Login" : "Logout"}
    //                             </Button>
    //                         </NavigationMenuLink>
    //                     </Link>
    //                 </NavigationMenuItem>
    //             </>
    //         )}
    //         {user && (
    //             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                 <Button asChild>
    //                     <Link href="/api/auth/logout"></Link>
    //                 </Button>
    //             </NavigationMenuLink>
    //         )}


    //     </NavigationMenuItem>
    // )
}

export default NavBar;
