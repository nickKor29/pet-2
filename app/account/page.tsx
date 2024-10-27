import { auth } from "../_lib/auth";

export const metadata = {
  title: "Аккаунт",
};
export default async function Page() {
  const session = await auth();
  console.log(session);
  return <h1 className="text-lg">Добро пожаловать, {session?.user?.name}!</h1>;
}
