import React from "react";
interface Review {
  id: number;
  created_at: string;
  users: { fullName: string };
  comment: string;
  rating: number;
  status: string;
}
export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section className="bg-gradient-to-br from-primary-900 to-primary-950  p-5 rounded-md shadow-md mb-4">
      <h2 className="text-2xl font-bold text-primary-50 mb-5">Отзывы</h2>
      <div className="grid grid-cols-2 gap-5">
        {reviews.length ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-primary-500 to-primary-700 p-4 rounded-md shadow-lg border-l-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">
                  {new Date(review.created_at).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="mt-2">
                <h3 className="text-xl font-semibold text-primary-50">
                  {review.users.fullName}
                </h3>
                <p className="text-primary-100 mt-1 text-lg">
                  {review.comment.replaceAll(";", ", ")}
                </p>
              </div>

              <div className="mt-2 flex items-center">
                <span className="text-yellow-500 text-lg font-bold">
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-gray-400 text-lg">
                  {5 - review.rating > 0 ? "☆".repeat(5 - review.rating) : ""}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-primary-100">
            На данный тур не оставляли еще отзывов.
          </p>
        )}
      </div>
    </section>
  );
}
