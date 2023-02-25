"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Imagenes() {

    const [imagenes, setImagenes] = useState(Array(0));

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
            const api_key = "live_atclZY7pmTUilo15ZwZ9pAzKu53J28r77xXOHAV2OD7VcUIcOQkub5MxXOaJKCvb"

            const data = await fetch(url,{headers: {
                'x-api-key': api_key
            }})
            const res = await data.json()

            setImagenes(res)
        }

        if (imagenes.length === 0) {
            fetchData()
        }
    })

    return(
        <>
            {imagenes.map((img) => (
                <div key={img.id}>
                    <h3>{img.id}</h3>
                    <Image src={img.url} alt={img.url} width={img.width} height={img.height}></Image>
                </div>
            ))}
        </>
    )
}