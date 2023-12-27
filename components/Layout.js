// fonts
import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// other imports
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <link rel="icon" href="/E.A.svg" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
