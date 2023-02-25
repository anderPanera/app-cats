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
      <h1>Pagina de gatos de Ander</h1>
    </div>
  )
}
