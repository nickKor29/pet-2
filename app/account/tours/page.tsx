import TourCard from "@/app/_components/TourCard";
import { auth } from "@/app/_lib/auth";
import { getUserTours } from "@/app/_lib/data-service";
import { User } from "@/app/_lib/types";
export const metadata = {
  title: "Мои туры",
};
export default async function Page() {
  const session = await auth();
  const user = session?.user as User;
  const tours = await getUserTours(user?.toursIds);
  console.log(tours);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Ваше участие в турах
      </h2>

      {tours.length === 0 ? (
        <p className="text-lg">
          Вы еще не участвовали в турах. Ознакомьтесь с нашими{" "}
          <a className="underline text-accent-500" href="/tours">
            экстремальными турами &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {tours.map((tour) => (
            <TourCard tour={tour} key={tour.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
