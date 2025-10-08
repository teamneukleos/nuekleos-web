import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { User } from "next-auth";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";
import { User as UserType } from "@prisma/client";

export const { handlers: { GET, POST }, auth } = NextAuth({
  trustHost: true,
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize ({ username, password }) {
        try {
          if (!password) return null;

          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: username as string },
              ]
            }
          });

          if (!user) return null;
          if (!(await compare(password as string, user.password))) return null;

          return user;
        } catch (error) {
          console.error(error);

          return null;
        }
      },
    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
        // token.role = user.role;
      }

      return token;
    },
    async session ({ session, token }) {
      return {
        ...session,
        user: {
          id: token.sub,
          name: token.name,
          email: token.email,
        },
        permissions: token.permissions,
      };
    },
  },
});
