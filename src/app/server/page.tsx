import { getPokemons } from "../service/service"


export default async function SSR() {
    const data = await getPokemons()

  return (
    <div>
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  )
}
