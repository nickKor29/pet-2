import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";
import { User } from "./types";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: { user?: User } }) {
      return !!auth?.user;
    },
    async signIn({ user }: { user: User }) {
      try {
        const existingGuest = await getUser(user.email);
        console.log(existingGuest);
        if (!existingGuest) {
          const newUser = { email: user.email, fullName: user.name };
          await createUser(newUser);
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      console.log(user);
      session.user.userId = user.id;
      session.user.toursIds = user.toursIds;
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
