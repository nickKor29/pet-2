import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
interface Tour {
  id: number;
  title: string;
  maxParticipants: number;
  currentParticipants: number;
  startDate: string;
  endDate: string;
  images: string[];
  available: boolean;
}
function TourCard({ tour }: { tour: Tour }) {
  const {
    id,
    title,
    maxParticipants,
    currentParticipants,
    startDate,
    endDate,
    images,
  } = tour;

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-2 border-primary-800 border">
      <div className=" relative">
        <Image
          src={images[0]}
          fill
          alt={`Tour ${title}`}
          className="object-cover"
        />
      </div>

      <div className=" p-5 bg-primary-950 flex flex-col justify-between">
        <h3 className="text-accent-500 font-semibold text-xl mb-2">{title}</h3>

        <div className="flex gap-3 items-center mb-2">
          <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
          <p className="text-lg text-primary-200">
            {new Date(startDate).toLocaleDateString()} -{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          <p className="text-lg text-primary-200">
            {currentParticipants}/{maxParticipants} участников
          </p>
        </div>

        <div className="mt-4 text-right">
          <Link
            href={`/tours/${id}`}
            className="bg-accent-500 py-2 px-4 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 text-primary-800 font-semibold"
          >
            Детали тура &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
