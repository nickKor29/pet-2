import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { auth } from "./auth";
import { Review } from "./types";
export const getTours = async function () {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("startDate", { ascending: true });

  if (error) throw new Error("Не удалось загрузить туры");
  return data;
};
export const getTour = async function (id: string) {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();
  return data;
};
export const getInstructors = async function getInstructors() {
  const { data, error } = await supabase
    .from("instructors")
    .select("id,name,profileImage")
    .eq("archived", false);
  if (error) throw new Error("Не удалось получить иструкторов");
  return data;
};
export const getInstructor = async function getInstructor(id: string) {
  const { data, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();
  return data;
};
export const getSertificates = async function getInstructor(id: string) {
  const { data, error } = await supabase
    .from("sertificates")
    .select("*")
    .eq("instructorId", id);

  if (error) throw new Error("Нет сертификатов");
  return data;
};
export const getReviews = async function (tourId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*,users(fullName)")
    .eq("tourId", tourId);
  if (error) throw new Error("Не удалось загрузить отзывы");
  return data;
};
export async function getUser(email: string) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}
export async function createUser(newUser: { email: string; fullName: string }) {
  const message = "Не удалось создать пользователя";
  const { data: users, error: e } = await supabase.from("users").select("id");
  if (e) throw new Error(message);
  const maxId = users?.reduce((max, obj) => (obj.id > max ? obj.id : max), 0);
  const { data, error } = await supabase
    .from("users")
    .insert([{ ...newUser, id: maxId! + 1 }])
    .select();

  if (error) {
    console.error("Error creating user:", error);
    throw new Error(message);
  }

  return data;
}
export async function updateProfile(
  updateData: {
    fullName?: string;
    phoneNumber?: string;
  },
  id: number
) {
  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", id);

  if (error) throw new Error("Не удалось обновить данные");
  return data;
}
export async function getUserTours(ids: number[]) {
  console.log(ids);
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .in("id", ids);
  if (error) throw new Error("Не удалось получить туры");
  return data;
}
export async function updateToursIds(id: string) {
  const session = await auth();
  console.log("UPDATE");

  const { data, error } = await supabase
    .from("users")
    .update({
      toursIds: [
        ...session?.user?.toursIds?.map((id: number) => String(id)),
        id,
      ],
    })
    .eq("id", session?.user?.id)
    .select();
  if (error) throw new Error("Не удалось записать на тур");
  return data;
}
export async function addComment(review: Review) {
  console.log(review);
  const { data: reviews, error: e } = await supabase
    .from("reviews")
    .select("id");
  if (e) throw new Error("Не удалось добавить коментарий");
  const maxId = reviews?.reduce((max, obj) => (obj.id > max ? obj.id : max), 0);
  const { data, error } = await supabase
    .from("reviews")
    .insert([{ ...review, status: "Ожидает", id: maxId + 1 }]);
  if (error) throw new Error("Не удалось добавить отзыв" + error.message);
  return data;
}
export async function getReviewsById(id: number) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*,tours(title,images)")
    .eq("userId", id);
  if (error) throw new Error("Не удалось загрузить отзывы");
  return data;
}
