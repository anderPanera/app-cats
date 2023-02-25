"use client"

import Link from 'next/link'

const links = [
    {
      label: 'GATO',
      route: '/gato'
    },
    {
      label: 'IMAGENES',
      route: '/imagenes'
    },
    {
        label: 'RAZAS',
        route: '/razas'
    }
  ]

export default function Navbar() {
    return(
        <ul class="nav">
            <li class="nav-item">
                <Link className="nav-link" href="/">app-cat</Link>
            </li>
            {links.map((link) => (
                    <li className="nav-item" key={link.route}>
                        <Link href={link.route} className="nav-link">{link.label}</Link>
                    </li>
                ))}
        </ul>
    )
}