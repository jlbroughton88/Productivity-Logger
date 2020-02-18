import React from "react";
import App from "next/app";
import { initAuth0 } from "@auth0/nextjs-auth0";
import { Auth0Provider } from "use-auth0-hooks";

// export default initAuth0({
//     domain: 'jlb1999.auth0.com',
//     clientId: 'VfgPz552GSJS9FeX2V3Va56llc6TLFOT',
//     clientSecret: process.env.AUTH0_SECRET,
//     scope: 'openid profile',
//     redirectUri: 'http://localhost:3000/api/callback',
//     postLogoutRedirectUri: 'http://localhost:3000/',
//     session: {
//         cookieSecret: '',
//         cookieLifetime: 60 * 60 * 8
//     }
// })

class MyApp extends App {
  

  render() {
    const { Component, pageProps } = this.props;
    console.log(process.env.DOMAIN)
    console.log(process.env.CLIENT_ID)
    console.log(process.env.REDIRECT_URI)
    return (
      <Auth0Provider
        domain={process.env.DOMAIN}
        clientId={process.env.CLIENT_ID}
        redirectUri={process.env.REDIRECT_URI}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}

export default MyApp;
