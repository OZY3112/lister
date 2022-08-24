import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => setShowChild(true), []);
  // if (!showChild) return null;

  // if (typeof window === "undefined") return <></>;
  // else

  function RenderCompleted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []);

    return mounted;
  }
  const isMounted = RenderCompleted();

  if (!isMounted) <> </>;
  if (isMounted)
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    );
}

export default MyApp;
