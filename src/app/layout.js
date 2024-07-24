import { League_Spartan } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "../app/assets/scss/style.scss"
import "../app/assets/css/materialdesignicons.min.css"
import "./globals.css";

const league = League_Spartan({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-league',
 })

export const metadata = {
  title: "The Royal Peak Realty - Premium Real Estate Agency in Dubai",
  description: "The Royal Peak Realty - Premium Real Estate Agency in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo1.png" />
      </head>
      <body className={league.variable}>{children}</body>
    </html>
  );
}
