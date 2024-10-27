import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";

export const metadata = {
  title: "Обновить профиль",
};
export default async function Page() {
  const session = await auth();
  const user = await getUser(session?.user?.email);
  console.log(user);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Обновите свой профиль гостя
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Предоставление следующей информации поможет сделать процесс регистрации
        более быстрым и удобным. Ждем вас!
      </p>

      <UpdateProfileForm user={user} />
    </div>
  );
}
