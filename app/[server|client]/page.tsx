'use client'
import { useEffect } from "react"

export default function Client() {

    useEffect(()=>{
        const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then(r => r.json())
        .then()
    })
    
    return(
        <div>
            Page
        </div>
    )
}