"use client";
import {
  Bars3Icon,
  InformationCircleIcon,
  MapIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { ReactElement, useState } from "react";

export default function MobileSidebarMenu({
  accountLink,
}: {
  accountLink: ReactElement;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-primary-100 fixed top-4 right-4 z-50 rounded-sm"
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-primary-900 text-white p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <h2 className="text-xl font-semibold mb-8">Меню</h2>
        <nav>
          <ul className="flex flex-col gap-4">
            <li className=" flex items-center gap-4">
              <MapIcon className="w-5 h-5  text-primary-300" />
              <Link
                href="/tours"
                className="text-lg hover:text-primary-300"
                onClick={closeMenu}
              >
                Туры
              </Link>
            </li>
            <li className=" flex items-center gap-4">
              <UsersIcon className="w-5 h-5  text-primary-300" />
              <Link
                href="/instructors"
                className="text-lg hover:text-primary-300"
                onClick={closeMenu}
              >
                Инструкторы
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <InformationCircleIcon className="w-5 h-5  text-primary-300" />
              <Link
                href="/about"
                className="text-lg hover:text-primary-300"
                onClick={closeMenu}
              >
                Про нас
              </Link>
            </li>
            {accountLink}
          </ul>
        </nav>
      </div>
    </div>
  );
}
