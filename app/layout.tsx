import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'G-Wave',
  description: 'Discover development projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
        <Navbar/>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
