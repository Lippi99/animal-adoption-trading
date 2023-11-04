import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} bg-white dark:bg-darkMode`}>
      <Component {...pageProps} />;
    </div>
  );
}
