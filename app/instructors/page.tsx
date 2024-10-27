import { Suspense } from "react";
import InstructorList from "../_components/InstructorList";
import Spinner from "../_components/Spinner";
export const metadata = {
  title: "Наши иструкторы",
};
function Page() {
  return (
    <>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Наши иструкторы
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Наши инструкторы — это команда профессионалов с многолетним опытом в
        проведении экстремальных туров и активного отдыха. Каждый из них —
        настоящий эксперт в своей области, который обеспечит безопасность и
        незабываемые впечатления во время ваших приключений.
      </p>
      <Suspense fallback={<Spinner />}>
        <InstructorList />
      </Suspense>
    </>
  );
}

export default Page;
