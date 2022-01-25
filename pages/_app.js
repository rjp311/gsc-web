import '../styles/global.css'
import Header from '../components/header'

export default function GSCWebApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}