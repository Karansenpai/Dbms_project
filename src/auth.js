import NextAuth, { Session } from "next-auth"
import authConfig from "./auth.config"

let existingUser = null;
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
    callbacks: {
      async session({ session, token }) {
        session.user = token.user;
        return session;
      },
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
    },
  ...authConfig,
  session: {strategy: "jwt"},
  
})