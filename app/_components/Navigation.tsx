import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-lg hidden md:block">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/tours"
            className="hover:text-accent-400 transition-colors"
          >
            Туры
          </Link>
        </li>
        <li>
          <Link
            href="/instructors"
            className="hover:text-accent-400 transition-colors"
          >
            Инструкторы
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            Про нас
          </Link>
        </li>
        <li>
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
              <span> Аккаунт</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Аккаунт
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
