import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@app/firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { firestore } from "@app/firebase";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Sign in user with Firebase
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
          const user = userCredential.user;

          // Return user data
          return { id: user.uid, email: user.email };
        } catch (error) {
          throw new Error(error.message);
        }
      }
    }),
  ],
  adapter: FirebaseAdapter(firestore),
  pages: {
    signIn: '/(auth)/login',
    signOut: '/(auth)/signout',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
});
