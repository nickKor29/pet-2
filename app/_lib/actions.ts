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
  const user = session.user as {
    userId: number;
    name: string;
    email: string;
    image: string;
    toursIds: number[];
  };
  await updateProfile(updateData, user.userId);
  revalidatePath("/account/profile");
}
export async function participateInTourAction(tourId: string) {
  await updateToursIds(tourId);
  revalidatePath(`/tours/${tourId}`);
}
export async function addReview(review: Review) {
  const session = await auth();
  if (!session) return;
  const user = session.user as {
    userId: number;
    name: string;
    email: string;
    image: string;
    toursIds: number[];
  };
  await addComment({
    ...review,
    userId: user.userId,
    tourId: Number(review.tourId),
  });
  revalidatePath(`/tours/${review.tourId}`);
}
