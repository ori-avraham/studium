import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import Zoom from "next-auth/providers/zoom";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub, Twitter, Zoom],
});
