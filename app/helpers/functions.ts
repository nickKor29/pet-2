import { auth } from "../_lib/auth";

export default async function getUserInfo() {
  const session = await auth();
  return session?.user || null;
}
