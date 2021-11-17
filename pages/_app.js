import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { AuthProvider } from "../components/admin/Auth";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
