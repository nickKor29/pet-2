"use client";
import { useFormStatus } from "react-dom";
import { updateProfileAction } from "../_lib/actions";
import { ReactNode } from "react";

function UpdateProfileForm({
  user,
}: {
  user: { fullName: string; email: string; phoneNumber: string };
}) {
  const { email, fullName, phoneNumber } = user;
  return (
    <form
      action={updateProfileAction}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col max-sm:px-3"
    >
      <div className="space-y-2">
        <label>Полное имя</label>
        <input
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Адрес электронной почты</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Номер телефона</label>
        <input
          defaultValue={phoneNumber}
          name="phoneNumber"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2"></div>

      <div className="flex justify-end items-center gap-6">
        <Button>Обновить профиль</Button>
      </div>
    </form>
  );
}

function Button({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 max-sm:mx-auto"
      disabled={pending}
    >
      {pending ? "Обновление..." : children}
    </button>
  );
}

export default UpdateProfileForm;
