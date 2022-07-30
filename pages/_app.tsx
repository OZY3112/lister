import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider as SupaProvider } from "react-supabase";
import { ChakraProvider } from "@chakra-ui/react";
import supabase from "../utils/supa";

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
