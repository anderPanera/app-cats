"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from './gato.module.css'

export default function Imagen() {
    const [cargando, setCargando] = useState(true)
    const [gato, setGato] = useState({id: null, url: '', width: 0, height: 0});

    useEffect(() => {
        if (gato.id == null) {
            fetchData()
        }
    })

    async function fetchData() {
        const url = `https://api.thecatapi.com/v1/images/search`;
        const api_key = "live_atclZY7pmTUilo15ZwZ9pAzKu53J28r77xXOHAV2OD7VcUIcOQkub5MxXOaJKCvb"

        const data = await fetch(url,{headers: {
            'x-api-key': api_key
        }})
        const res = await data.json()
        
        setCargando(false)
        setGato(res[0])
    }

    function otraImagen() {
        setCargando(true)
        fetchData()
    }

    if (cargando) {
        return(
            <>
                <button className={styles.boton} onClick={() => otraImagen()}>Cargar otra imagen</button>
                <div className={styles.lds}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </>
        )
    }

    return(
        <>  
            <button className={styles.boton} onClick={() => otraImagen()}>Cargar otra imagen</button>
            <img src={gato.url} alt={gato.url} className={styles.img}></img> 
        </>
    )
}