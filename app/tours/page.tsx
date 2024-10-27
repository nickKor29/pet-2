import { Suspense } from "react";
import TourList from "../_components/TourList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ToggleAvailableButton from "../_components/Available";

export const metadata = {
  title: "Туры",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { difficulty: string; available: string };
}) {
  console.log(searchParams);
  const filter = searchParams?.difficulty ?? "all";
  const available = searchParams?.available ?? "true";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Экстремальные Туры
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Приготовьтесь к незабываемым приключениям! Наши экстремальные туры
        предлагают уникальные возможности для исследования дикой природы России.
        Представьте, как вы покоряете величественные горы, пробираетесь через
        густые леса или сплавляетесь по бурным рекам. Каждый тур обещает вам
        адреналин, новые знакомства и незабываемые впечатления. Присоединяйтесь
        к нам и откройте для себя самые захватывающие уголки нашей страны!
      </p>
      <div className="grid grid-cols-2 mb-8 max-sm:grid-cols-1 max-sm:gap-2">
        <ToggleAvailableButton />
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={`${filter}-${available}`}>
        <TourList filter={filter} available={available} />
      </Suspense>
    </div>
  );
}
