import Link from "next/link"

const links = [
  {
    label: 'INICIO',
    route: ''
  },
  {
    label: 'IMAGENES',
    route: '/imagenes'
  }
]

export default function Home() {
  return (
    <div>
      <h1>Ander</h1>
      {links.map((link) => (
        <Link key={link.route} href={link.route}>{link.label}</Link>
      ))}
    </div>
  )
}
