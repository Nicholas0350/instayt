// import NextAuth from "next-auth"

// import GoogleProvider from "next-auth/providers"

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],

//   pages: {
//     signIn: "/auth/signin",
//   },
// })

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const na = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],   
  debug: true,
  // pages: {
  //   signIn: "/auth/signin",
  // },
})

export default function handler(req, res) {
  console.log("request", req);
  na(req, res);
}