"use client";

import KasperLogo from "@/app/ui/kasper-logo";
import Link from "next/link";
import Image from "next/image";
import { libre } from "../ui/fonts";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  CameraIcon,
  EnvelopeIcon,
  HomeIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigations = [
  { name: "Home", href: "/", current: true, Icon: HomeIcon },
  { name: "About Us", href: "/about", current: false, Icon: UserGroupIcon },
  { name: "Custom", href: "/custom", current: false, Icon: PuzzlePieceIcon },
  { name: "Instagram", href: "/instagram", current: false, Icon: CameraIcon },
  { name: "Contact", href: "/contact", current: false, Icon: EnvelopeIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarPage() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className={`${libre.className} relative flex justify-between w-screen h-16 bg-gradient-to-r from-zinc-500 from-10% via-zinc-700 via-50% to-zinc-900 to-90% border-none shadow-md shadow-zinc-500 rounded-tl-3xl rounded-br-3xl`}
    >
      <div className="absolute h-screen top-0 left-0 w-16 rounded-tl-3xl rounded-br-3xl bg-gradient-to-b from-zinc-500 from-10% via-zinc-700 via-50% to-zinc-900 to-90% -z-10 shadow-md shadow-zinc-500"></div>
      <div className="h-full">
        <Image
          src="/images/k-no-bg.png"
          width={50}
          height={50}
          alt="Kasper logo"
          className="bg-none z-20 ml-1.5"
        />
      </div>
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              {navigations.map((item) => {
                const { Icon } = item;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                      {
                        "bg-gray-700 text-white": pathname === item.href,
                      }
                    )}
                  >
                    <div className="flex flex-row gap-2 items-end">
                      <Icon className="w-6 h-6" />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden cursor-pointer">
              <Image
                alt="company logo"
                src="/images/logo.png"
                width={50}
                height={50}
                className="size-12 rounded-full"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                >
                  Sign In
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigations.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
