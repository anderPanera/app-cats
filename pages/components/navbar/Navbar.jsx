"use client"

import 'bootstrap/dist/js/bootstrap'
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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">app-cat</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => (
                            <li className="nav-item" key={link.route}>
                                <Link href={link.route} className="nav-link">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}