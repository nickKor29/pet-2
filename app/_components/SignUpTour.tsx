"use client";

import { useTransition } from "react";
import { participateInTourAction } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

function SignUpTour({ tourId }: { tourId: string }) {
  const [isPending, startTransition] = useTransition();
  function handleClick() {
    startTransition(() => participateInTourAction(tourId));
  }
  return (
    <button
      onClick={handleClick}
      className="px-4 py-3 bg-accent-500 transition-colors duration-200 ease-in hover:bg-amber-600 rounded-sm"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        "Записаться на участие в туре"
      )}
    </button>
  );
}

export default SignUpTour;
