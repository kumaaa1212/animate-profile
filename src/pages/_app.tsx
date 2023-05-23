import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat} from 'next/font/google'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
const Fonts = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
  <main className={`${Fonts.variable} font-mont bg-light w-full min-h-screen`}>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </main>
    </>
  )
}
