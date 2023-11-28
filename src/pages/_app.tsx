import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/sass/main.scss";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'  

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
