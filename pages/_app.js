import "../styles/globals.css";
import Head from "next/head";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import MusicPlayer from "../components/Music";
// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="app-container style={{ transform: 'scale(0.80)', transformOrigin: 'top left', width: '125%', height: '125%' }}">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />;
          </motion.div>
        </AnimatePresence>
        <MusicPlayer />
      </Layout>
    </div>
  );
}

export default MyApp;
