import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { AuthProvider } from "../components/admin/Auth";
import { SnackbarProvider } from "notistack";
function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
