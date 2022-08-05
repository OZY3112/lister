import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => setShowChild(true), []);
  if (!showChild) return null;

  if (typeof window === "undefined") return <></>;
  else
    return (
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_OAUTH_ID}`}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleOAuthProvider>
    );
}

export default MyApp;
