import Link from "next/link";
import styles from './razas.module.css'

export default async function Lista() {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_atclZY7pmTUilo15ZwZ9pAzKu53J28r77xXOHAV2OD7VcUIcOQkub5MxXOaJKCvb"

    const data = await fetch(url,{headers: {
        'x-api-key': api_key
    }})

    const razas = await data.json()

    return(
        <div className="row">
            {razas.map((raza) => (
                <div key={raza.id} className="col-12 col-sm-6 col-lg-3 p-2">
                    <div className="card">
                        <img src={`https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`} className="card-img-top" alt={raza.reference_image_id}/>
                        <div className="card-body">
                        <h5 className="card-title">{raza.name}</h5>
                        <p className="card-text">{raza.description}</p>
                        <Link href={`/razas/${raza.id}`} className={styles.boton}>Ver mas</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}