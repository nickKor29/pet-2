import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
interface Review {
  rating: number;
  comment: string;
  status: string;
  rejectionReason: string;
  tours: {
    title: string;
    images: string[];
  };
}
function ReviewCard({ review }: { review: Review }) {
  const {
    rating,
    comment,
    status,
    rejectionReason,
    tours: { title, images },
  } = review;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-500" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-lg border-primary-950 bg-gradient-to-br from-primary-900 to-primary-950 hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-40 mb-4">
        <Image
          fill
          src={images[0]}
          alt={title}
          className="object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, 640px"
          quality={100}
        />
      </div>
      <h3 className="font-semibold text-xl text-white mb-1">{title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex">{renderStars(rating)}</div>
        <span className="ml-2 text-sm text-white">{rating} / 5</span>
      </div>
      <p className="text-lg text-primary-50 mb-2">{comment}</p>
      <p
        className={`text-base font-semibold ${
          status === "Отклонено" ? "text-red-300" : "text-primary-100"
        }`}
      >
        Статус: {status}
      </p>
      {status === "Отклонено" && rejectionReason && (
        <p className="text-sm text-red-300 mt-1">
          Причина отказа: {rejectionReason}
        </p>
      )}
    </div>
  );
}

export default ReviewCard;
