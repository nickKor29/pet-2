import BackButton from "@/app/_components/BackButton";
import {
  getInstructor,
  getInstructors,
  getSertificates,
} from "@/app/_lib/data-service";
import {
  BriefcaseIcon,
  CalendarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface Params {
  instructorId: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { name } = await getInstructor(params.instructorId);
  return { title: name };
}

export async function generateStaticParams() {
  const instructors = await getInstructors();
  return instructors.map((instructor) => ({
    instructorId: String(instructor.id),
  }));
}

export default async function Page({ params }: { params: Params }) {
  const instructor = await getInstructor(params.instructorId);
  const certificates = await getSertificates(params.instructorId);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col items-center mb-14">
        <div className="relative w-96 h-96 mb-4 max-sm:w-3/4 max-sm:h-72">
          <Image
            src={instructor.profileImage}
            alt={instructor.name}
            fill
            className="object-cover rounded-md shadow-lg "
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-primary-50">
          {instructor.name}
        </h1>
        <p className="text-primary-100 text-center mt-2 text-xl">
          {instructor.bioText.replaceAll(";", ", ")}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-primary-50">
          Контактная информация
        </h2>
        <p className="text-primary-100 flex flex-col gap-2.5 text-lg">
          {instructor.contactInfo
            .split(";")
            .map((info: string, index: number) => {
              const trimmedInfo = info.trim();
              const isEmail = trimmedInfo.includes("@");
              const link = isEmail
                ? `mailto:${trimmedInfo}`
                : `tel:${trimmedInfo}`;

              return (
                <a
                  key={index}
                  href={link}
                  className=" text-primary-100 relative group"
                >
                  {trimmedInfo}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent-200 transition-all duration-300 ease-linear group-hover:w-60" />
                </a>
              );
            })}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Сертификаты</h2>
        <div className="space-y-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="border border-accent-300 p-4 rounded-lg bg-primary-800 shadow-sm"
            >
              <h3 className="text-lg font-bold text-primary-50 mb-5">
                {certificate.title}
              </h3>

              <div className="flex flex-col gap-3">
                <p className="text-primary-100 flex items-center text-lg max-sm:border-b-2 border-primary-300  max-sm:justify-center max-400:pb-1 max-400:pb-1">
                  <CalendarIcon className="h-5 w-5 text-primary-300 mr-2" />
                  <span className="flex gap-1.5 max-400:flex-col">
                    <strong>Дата выдачи: </strong>
                    {new Date(certificate.dateIssue).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-primary-100 flex items-center text-lg max-400:border-b-2 border-primary-300 max-400:justify-center max-400:pb-1">
                  <CalendarIcon className="h-5 w-5 text-primary-300 mr-2" />
                  <span className="flex gap-1.5 max-400:flex-col">
                    <strong>Дата истечения: </strong>
                    {new Date(certificate.expirationDate).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-primary-100 flex items-center text-lg max-sm:border-b-2 border-primary-300  max-sm:justify-center max-sm:pb-1">
                  <BriefcaseIcon className="h-5 w-5 text-primary-300 mr-2" />
                  <span className="flex gap-1.5 max-sm:flex-col">
                    <strong>Организация:</strong> {certificate.organization}
                  </span>
                </p>
                <p className="text-primary-100 flex items-center text-lg max-sm:border-b-2 border-primary-300  max-sm:justify-center max-sm:pb-1">
                  <DocumentTextIcon className="h-5 w-5 text-primary-300 mr-2" />
                  <span className="flex gap-1.5 max-sm:flex-col">
                    <strong>Описание:</strong>
                    {certificate.description.replaceAll(";", ", ")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <BackButton variant="secondary">Вернуться назад</BackButton>
      </div>
    </div>
  );
}
