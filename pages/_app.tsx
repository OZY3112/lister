import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider as SupaProvider } from "react-supabase";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import supabase from "../stores/supa";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_OAUTH_ID}`}>
        <SupaProvider value={supabase}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </SupaProvider>
      </GoogleOAuthProvider>
    );
  }
}

export default MyApp;
