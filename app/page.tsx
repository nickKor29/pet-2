import Image from "next/image";
import bg from "@/public/bg.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={100}
        alt="Kayaking POV"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl text-primary-50 mb-10 tracking-tight font-normal max-md:text-6xl mb-14 max-sm:text-4xl">
          Откройте для себя уникальные туры
        </h1>
        <Link
          href="/tours"
          className=" bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all max-md:text-base text-center max-sm:p-2"
        >
          Исследуйте экстремальные приключения
        </Link>
      </div>
    </main>
  );
}
