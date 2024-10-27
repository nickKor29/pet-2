"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ToggleAvailableButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const available = searchParams.get("available") === "false" ? false : true;

  const toggleAvailable = () => {
    const newAvailable = !available;
    const params = new URLSearchParams(searchParams);
    params.set("available", String(newAvailable));

    router.push(`?${params.toString()}`);
  };

  return (
    <button
      className="px-5 py-2 bg-primary-700 hover:bg-primary-800 transition-colors duration-200 ease-in-out self-center justify-self-start max-sm:justify-self-stretch"
      onClick={toggleAvailable}
    >
      {available ? "История туров" : "Текущие туры"}
    </button>
  );
}
