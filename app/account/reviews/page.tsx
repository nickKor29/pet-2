import ReviewCard from "@/app/_components/ReviewCard";
import { auth } from "@/app/_lib/auth";
import { getReviewsById } from "@/app/_lib/data-service";

export const metadata = {
  title: "Мои отзывы",
};

export default async function Page() {
  const session = await auth();
  const reviews = await getReviewsById(session?.user?.userId);
  console.log(reviews);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Ваши отзывы
      </h2>

      {reviews.length === 0 ? (
        <p className="text-lg">
          Вы еще не оставляли отзывы. Ознакомьтесь с нашими{" "}
          <a className="underline text-accent-500" href="/tours">
            экстремальными турами &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
