import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const res = await fetch("https://api.github.com/user/public_emails", {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${account.access_token}`,
        },
        
      });
      console.log('ress: ', res)
     
    },
  }, 
}
export default NextAuth(authOptions)