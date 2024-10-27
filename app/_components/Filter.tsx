"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("difficulty") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("difficulty", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 grid grid-cols-5 max-xl:grid-cols-2 max-xl:grid-rows-2 max-sm:grid-cols-1">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Все туры
      </Button>
      <Button
        filter="easy"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Легкие
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Средние
      </Button>
      <Button
        filter="hard"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Тяжелые
      </Button>
      <Button
        filter="extreme"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        className="max-xl:col-span-full max-xl:col-span-2"
      >
        Экстремальные
      </Button>
    </div>
  );
}

interface ButtonProps {
  filter: string;
  children: ReactNode;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  className?: string; 
}

function Button({
  filter,
  children,
  handleFilter,
  activeFilter,
  className,
}: ButtonProps) {
  return (
    <button
      className={`pr-2 self-center py-2 hover:bg-primary-700 transition-colors duration-300 ease-in-out ${className} ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
