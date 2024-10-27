"use client";
import React, { useState, useTransition } from "react";
import ReactStars from "react-rating-stars-component";
import { addReview } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

function AddReview({ tourId }: { tourId: string }) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => addReview({ rating, comment, tourId }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full p-6 bg-gradient-to-br from-primary-900 to-primary-950 shadow-md rounded-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-primary-50 text-center">
        Оставьте ваш отзыв
      </h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-primary-100">
          Рейтинг:
        </label>
        <ReactStars
          count={5}
          onChange={(newRating: number) => setRating(newRating)}
          size={30}
          isHalf={true}
          activeColor="#FF9E02"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-primary-100 mb-4">
          Комментарий:
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          disabled={isPending}
          placeholder="Напишите ваш отзыв..."
          className="w-full p-4 bg-primary-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-primary-300 text-lg resize-none"
          rows={5}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300"
      >
        {isPending ? (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        ) : (
          "Отправить отзыв"
        )}
      </button>
    </form>
  );
}

export default AddReview;
