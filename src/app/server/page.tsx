import React from 'react';
import { ResponsePokemon } from "../types/types";
import Image from "next/image";
import Link from 'next/link';
import { getPokemons } from '../service/service';

export default async function ListPokemonSSR() {
const finalData: ResponsePokemon[] = await getPokemons();

  return (
    <div className='flex flex-row flex-wrap justify-evenly'>
      {finalData.map((pokemon, index) => (
        <div key={index} className="w-64 p-5">
          <div>
            <Image
              src={pokemon.details[0].sprites.front_default}
              alt={pokemon.details[0].name}
              width={50}
              height={50}
            />
            <div>
              <h6>
                {pokemon.details[0].name}
              </h6>
              <h2>
                Base Experience: {pokemon.details[0].base_experience}
              </h2>
            </div>
            <div>
              <Link href={`/server/${pokemon.details[0].order}`}>View Details</Link>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}