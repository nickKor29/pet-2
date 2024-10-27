"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { addComment, updateProfile, updateToursIds } from "./data-service";
import { Review } from "./types";
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function updateProfileAction(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Вы должны войти в свой аккаунт");
  const fullName = formData.get("fullName") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const updateData = { fullName, phoneNumber };
  await updateProfile(updateData, session?.user?.userId);
  revalidatePath("/account/profile");
}
export async function participateInTourAction(tourId: string) {
  await updateToursIds(tourId);
  revalidatePath(`/tours/${tourId}`);
}
export async function addReview(review: Review) {
  const session = await auth();
  console.log("FORMDATA");
  console.log({
    ...review,
    userId: session?.user?.userId,
    tourId: Number(review.tourId),
  });
  await addComment({
    ...review,
    userId: session?.user?.userId,
    tourId: Number(review.tourId),
  });
  revalidatePath(`/tours/${review.tourId}`);
}
