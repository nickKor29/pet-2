import Link from "next/link";
import { auth } from "../_lib/auth";
import {
  CalendarDaysIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

async function AccountLink() {
  const session = await auth();
  return (
    <>
      <li className=" mb-4 flex items-center">
        {session?.user ? (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <img
              className="h-8 rounded-full"
              src={session.user.image || ""}
              alt={session.user.name || "Пользователь"}
              referrerPolicy="no-referrer"
            />
            <span className="text-lg hover:text-primary-300"> Аккаунт</span>
          </Link>
        ) : (
          <>
            <UserIcon />
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Аккаунт
            </Link>
          </>
        )}
      </li>
      <li className=" flex items-center gap-4">
        <HomeIcon className="w-5 h-5  text-primary-300" />
        <Link href="/account" className="text-lg hover:text-primary-300">
          Главная
        </Link>
      </li>
      <li className=" flex items-center gap-4">
        <CalendarDaysIcon className="w-5 h-5  text-primary-300" />
        <Link href="/account/tours" className="text-lg hover:text-primary-300">
          Мои туры
        </Link>
      </li>
      <li className=" flex items-center gap-4">
        <ChatBubbleLeftIcon className="w-5 h-5  text-primary-300" />
        <Link
          href="/account/reviews"
          className="text-lg hover:text-primary-300"
        >
          Мои отзывы
        </Link>
      </li>
      <li className=" flex items-center gap-4">
        <UserIcon className="w-5 h-5  text-primary-300" />
        <Link
          href="/account/profile"
          className="text-lg hover:text-primary-300"
        >
          Мой профиль
        </Link>
      </li>
    </>
  );
}

export default AccountLink;
