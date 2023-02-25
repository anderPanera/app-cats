"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from './razaid.module.css'

export default function RazaID({ params }) {
    const { id } = params

    const [cargando, setCargando] = useState(true)
    const [raza, setRaza] = useState({
        "weight": {
            "imperial": null,
            "metric": null
        },
        "id": null,
        "name": null,
        "vetstreet_url": null,
        "temperament": null,
        "origin": null,
        "country_codes": null,
        "country_code": null,
        "description": null,
        "life_span": null,
        "indoor": null,
        "alt_names": null,
        "adaptability": null,
        "affection_level": null,
        "child_friendly": null,
        "dog_friendly": null,
        "energy_level": null,
        "grooming": null,
        "health_issues": null,
        "intelligence": null,
        "shedding_level": null,
        "social_needs": null,
        "stranger_friendly": null,
        "vocalisation": null,
        "experimental": null,
        "hairless": null,
        "natural": null,
        "rare": null,
        "rex": null,
        "suppressed_tail": null,
        "short_legs": null,
        "wikipedia_url": '',
        "hypoallergenic": null,
        "reference_image_id": null
    });

    useEffect(() => {

        async function fetchData() {
            const url = `https://api.thecatapi.com/v1/breeds/${id}`;
            const api_key = "live_atclZY7pmTUilo15ZwZ9pAzKu53J28r77xXOHAV2OD7VcUIcOQkub5MxXOaJKCvb"
    
            const data = await fetch(url,{headers: {
                'x-api-key': api_key
            }})
            const res = await data.json()
            
            setCargando(false)
            setRaza(res)
        }

        fetchData()
    })

    return(
        <div className="container">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={`https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`} class="img-fluid rounded-start" alt={raza.name}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{raza.name}</h5>
                            <p class="card-text">
                                {raza.description}
                                
                            </p>
                            <div>
                                <p>Caracteristicas:</p>
                                <span className="btn btn-danger me-2 mb-2">Origen: {raza.origin}</span>
                                <span className="btn btn-warning me-2 mb-2">Esperanza de Vida: {raza.life_span}</span>
                            </div>
                            <p>Temperamento: {raza.temperament}</p>
                            <p class="card-text"><small class="text-muted"><Link target='_blank' href={raza.wikipedia_url}>Wikipedia</Link></small></p>
                            <Link href="/razas" className={styles.boton}>Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}