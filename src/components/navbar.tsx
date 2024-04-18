import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import { Button } from './ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';

const NavBar = () => {
  const { user } = useUser();
  return (
    <nav className="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.cdnlogo.com/logos/n/80/next-js.svg"
            className="h-8"
            alt="Next Logo "
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Next Starter App
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          ></svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <Link
                href="/profile"
                className="block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500"
                aria-current="page"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/login"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/signup"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/logout"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

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
};

export default NavBar;
