import { getTours } from "../_lib/data-service";
import TourCard from "./TourCard";

async function TourList({
  filter,
  available,
}: {
  filter: string;
  available: string;
}) {
  const tours = await getTours();
  if (!tours.length) return null;

  let displayedTours = tours;

  if (filter === "easy") {
    displayedTours = displayedTours.filter(
      (tour) => tour.difficultyLevel === "Легкий"
    );
  }
  if (filter === "medium") {
    displayedTours = displayedTours.filter(
      (tour) => tour.difficultyLevel === "Средний"
    );
  }
  if (filter === "hard") {
    displayedTours = displayedTours.filter(
      (tour) => tour.difficultyLevel === "Высокий"
    );
  }
  if (filter === "extreme") {
    displayedTours = displayedTours.filter(
      (tour) => tour.difficultyLevel === "Экстремальный"
    );
  }

  // Фильтрация по доступности
  if (available === "true") {
    displayedTours = displayedTours.filter(
      (tour) => tour.available === true && new Date(tour.endDate) > new Date()
    );
  }
  if (available === "false") {
    displayedTours = displayedTours.filter(
      (tour) => tour.available === false || new Date(tour.endDate) <= new Date()
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedTours.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
  );
}

export default TourList;
