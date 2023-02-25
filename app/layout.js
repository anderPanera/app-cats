import Navbar from '@/pages/components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
