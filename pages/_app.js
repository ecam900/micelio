import Layout from '../components/Layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/globals.css';

// GSAP Plugins
if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
