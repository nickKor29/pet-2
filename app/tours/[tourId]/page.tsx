import AddReview from "@/app/_components/AddReview";
import BackButton from "@/app/_components/BackButton";
import Gallery from "@/app/_components/Gallery";
import LoginMessage from "@/app/_components/LoginMessage";
import ReviewsSection from "@/app/_components/ReviewsSection";
import SignUpTour from "@/app/_components/SignUpTour";
import { auth } from "@/app/_lib/auth";
import { getReviews, getTour, getTours } from "@/app/_lib/data-service";
interface Params {
  tourId: string;
}
export async function generateMetadata({ params }: { params: Params }) {
  const { title } = await getTour(params.tourId);
  return { title: title };
}
export async function generateStaticParams() {
  const tours = await getTours();
  const ids = tours.map((tour) => ({ tourId: String(tour.id) }));
  return ids;
}
export default async function Page({ params }: { params: Params }) {
  const [tour, reviews] = await Promise.all([
    getTour(params.tourId),
    getReviews(params.tourId),
  ]);
  const approvedReviews = reviews.filter(
    (review) => review.status === "Одобрено"
  );
  console.log(reviews);
  const session = await auth();
  const {
    id,
    title,
    location,
    regularPrice,
    discount,
    available,
    difficultyLevel,
    description,
    category,
    startDate,
    endDate,
    images,
    maxParticipants,
    currentParticipants,
  } = tour;
  const showReviews = new Date(endDate) < new Date();
  console.log(new Date(endDate) < new Date());
  const price = discount > 0 ? regularPrice - discount : regularPrice;

  return (
    <div className=" p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold  text-accent-500">{title}</h1>
        <BackButton>&larr; Назад</BackButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 mb-16">
        <Gallery images={images} />

        <div className="self-start bg-gradient-to-br from-primary-900 to-primary-950 p-6 rounded-md shadow-lg space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Информация о туре
          </h2>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Локация:</span>
            <span className="text-white">{location}</span>
          </div>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Уровень сложности:</span>
            <span
              className={`px-2 py-1 rounded-full ${
                difficultyLevel === "Экстремальный"
                  ? "bg-red-500"
                  : "bg-blue-500"
              } text-white`}
            >
              {difficultyLevel}
            </span>
          </div>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Категория:</span>
            <span className="text-white">{category}</span>
          </div>

          <div className="border-t border-primary-800 my-2"></div>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Доступность:</span>
            <span
              className={`text-white ${
                available ? "text-green-500" : "text-red-500"
              }`}
            >
              {available ? "Доступно" : "Недоступно"}
            </span>
          </div>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Даты проведения:</span>
            <span className="text-white">
              {new Date(startDate).toLocaleDateString()} —{" "}
              {new Date(endDate).toLocaleDateString()}
            </span>
          </div>

          <div className="border-t border-primary-800 my-2"></div>

          <div className="flex items-baseline justify-between text-lg text-primary-200">
            <span className="text-2xl font-semibold text-white">
              {price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </span>
            {discount > 0 && (
              <span className="text-primary-500 line-through ml-2">
                {regularPrice.toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                })}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center text-lg text-primary-200">
            <span className="font-medium">Участники:</span>
            <span className="text-white">
              {currentParticipants}/{maxParticipants}
            </span>
          </div>

          <div className="border-t border-primary-800 my-2"></div>

          <p className="text-lg text-primary-100 mt-4 leading-relaxed">
            {description}
          </p>
          {new Date() < new Date(startDate) &&
            session?.user &&
            !session?.user?.toursIds?.includes(id) &&
            currentParticipants < maxParticipants && (
              <SignUpTour tourId={params.tourId} />
            )}
          {!session?.user &&
            new Date() < new Date(startDate) &&
            currentParticipants < maxParticipants && <LoginMessage />}
          {currentParticipants === maxParticipants && (
            <div className="grid bg-primary-800">
              <p className="text-center text-lg py-12 self-center">
                К сожелению мест не осталось :(
              </p>
            </div>
          )}
        </div>
      </div>
      {showReviews && <ReviewsSection reviews={approvedReviews} />}
      {session?.user?.toursIds?.includes(id) &&
        new Date() > new Date(endDate) &&
        !reviews.some((review) => review.userId === session?.user?.userId) && (
          <AddReview tourId={params.tourId} />
        )}

      {session?.user?.toursIds.includes(id) &&
        new Date() < new Date(endDate) && (
          <p className="text-lg p-2 bg-accent-600 text-accent-50 text-center">
            Вы участвуете в этом туре. Оставить отзыв можно будет после его
            завершения.
          </p>
        )}
      {reviews.some(
        (review) =>
          review.userId === session?.user?.userId && review.status === "Ожидает"
      ) && (
        <p className="text-lg p-2 bg-accent-600 text-accent-50 text-center">
          Вы написали свой отзыв, он будет опубликован после модерации
        </p>
      )}
    </div>
  );
}
