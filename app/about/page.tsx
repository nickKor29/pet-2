import Image from "next/image";
import about1 from "@/public/about1.png";
import about2 from "@/public/about2.png";
export const metadata = {
  title: "Про нас",
};

export default function Page() {
  return (
    <div className="grid grid-cols-6 gap-x-24 gap-y-32 text-lg items-center max-md:gap-y-14">
      <div className="col-span-4 max-md:col-span-full">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Наши Экстремальные Туры
        </h1>

        <div className="space-y-8">
          <p>
            Добро пожаловать в мир захватывающих приключений! Мы предлагаем
            уникальные туры, которые позволят вам насладиться красотой дикой
            природы России и испытать незабываемые эмоции.
          </p>
          <p>
            Каждое путешествие — это не только возможность увидеть удивительные
            места, но и шанс испытать свои силы, познакомиться с культурой и
            традициями местных жителей. Вы будете гулять по живописным тропам,
            подниматься на вершины гор и сплавляться по бурным рекам.
          </p>
          <p>
            Мы гарантируем, что каждый тур подарит вам яркие впечатления и
            возможности для фото на память. Присоединяйтесь к нам и откройте для
            себя новые горизонты!
          </p>
        </div>
      </div>

      <div className="col-span-2 max-md:col-span-3">
        <Image
          src={about1}
          placeholder="blur"
          quality={80}
          alt="Экстремальные приключения на природе"
        />
      </div>

      <div className="col-span-2 max-md:col-span-3">
        <Image
          src={about2}
          quality={80}
          placeholder="blur"
          alt="Групповая активность на туре"
        />
      </div>

      <div className="col-span-4 max-md:col-span-full">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Почему стоит выбрать наши туры?
        </h1>

        <div className="space-y-8">
          <p>
            Наши туры организованы опытными гидами, которые знают каждую
            тропинку и могут рассказать вам множество интересных историй о
            посещаемых местах.
          </p>
          <p>
            Мы предлагаем различные уровни сложности — от легких маршрутов для
            новичков до экстремальных приключений для опытных путешественников.
            Наша цель — сделать ваш опыт комфортным и запоминающимся.
          </p>

          <div>
            <a
              href="/tours"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Узнайте больше о наших турах
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
