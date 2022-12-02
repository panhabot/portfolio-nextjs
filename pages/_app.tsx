import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import {Vollkorn} from '@next/font/google'
import { Html } from 'next/document';

const vollkorn = Vollkorn({weight: '400'});
export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={vollkorn.className} id="home">
    
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </main>
    )
}
