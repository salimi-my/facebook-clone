import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      userinfo: {
        url: 'https://graph.facebook.com/me',
        params: { fields: 'id,name,first_name,last_name,email,picture' }
      },
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          image: profile.picture.data.url
        };
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/login'
  }
});
