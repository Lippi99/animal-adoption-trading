import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import { Login } from "../Login";
import useColorMode from "@/hooks/useColorMode";
import NextImage from "next/image";
import NextLink from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="dark:bg-darkMode">
      <nav
        className="mx-auto relative z-10 flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only dark:text-white">Your Company</span>
          <NextLink className="-m-1.5 p-1.5" href="/">
            <NextImage
              width={50}
              height={50}
              className="h-8 w-auto"
              src="/logo.png"
              alt="logo"
            />
          </NextLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only dark:text-white">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NextLink
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            About us
          </NextLink>
          <NextLink
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Adopt
          </NextLink>
          <NextLink
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Contact us
          </NextLink>
          <NextLink
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Resources
          </NextLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="dark:text-white mr-12"
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? (
              <MoonIcon width={25} />
            ) : (
              <SunIcon width={25} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpenLogin(true)}
            className="text-sm cursor-pointer font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
            <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-darkMode px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only dark:text-white">Your Company</span>
              <NextLink href="/">
                <NextImage
                  width={50}
                  height={50}
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="logo"
                />
              </NextLink>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only dark:text-white">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button
                  className="dark:text-white mr-12"
                  onClick={() =>
                    setColorMode(colorMode === "light" ? "dark" : "light")
                  }
                >
                  {colorMode === "light" ? (
                    <MoonIcon width={25} />
                  ) : (
                    <SunIcon width={25} />
                  )}
                </button>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50"
                >
                  Adopt
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50"
                >
                  Contact us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
