import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800">
      <p className="text-center text-lg py-12 self-center">
        Пожалуйста{" "}
        <Link href="/login" className="underline text-accent-500">
          Войдите в аккаунт
        </Link>
        чтобы записаться на этот
        <br /> тур прямо сейчас
      </p>
    </div>
  );
}

export default LoginMessage;
