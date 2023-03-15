import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Roboto } from "next/font/google";
import { SWRConfig } from "swr";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.variable};
          }
        `}
      </style>
      <Layout>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(`${process.env.API_URL}/${resource}`, init).then((res) =>
                res.json()
              ),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
