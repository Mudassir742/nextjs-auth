import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, ...appProps }) {
  const isLayoutNeeded = [`/login`, "/signup"].includes(
    appProps.router.pathname
  );

  if (isLayoutNeeded) return <Component {...pageProps} />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
