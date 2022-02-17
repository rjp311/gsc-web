import dynamic from "next/dynamic";
import Head from "next/head"

import config from "../cms/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
    {
      ssr: false,
      loading: () => <h1 style={{position: 'absolute', textAlign: 'center', width: '100%', top: '45%', fontWeight: '600'}}>Loading...</h1>,
    }
);

const AdminPage = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>

      <CMS />
    </>
  )
}

export default AdminPage;