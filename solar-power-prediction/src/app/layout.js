import { Inter } from "next/font/google";
import "./globals.css";
import Example from "./components/new";
import Footer from "./components/Footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'Solar Power Prediction',
  description: 'Unlock the power of solar energy with our Solar Power Predictor. Our cutting-edge prediction technology harnesses the potential of sunlight to forecast solar power generation accurately. Whether you are a homeowner exploring solar solutions or a business optimizing energy usage, our predictor empowers you with real-time insights. Experience efficiency and sustainability as you journey towards a brighter, greener future. Embrace solar intelligence with confidence and make informed decisions with our Solar Power Predictor.',
  icons:{
    icon: '/favicon.ico',
    shortcut: '/apple-touch-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
    
  }
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
        <body>
        <header>
         <Example/>
        </header>
        {children}
        <footer>
        <Footer/>
        </footer>
        </body>
    </html>
  )
}
