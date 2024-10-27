import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Войдите, чтобы получить доступ к личному кабинету
      </h2>
      <SignInButton />
    </div>
  );
}
