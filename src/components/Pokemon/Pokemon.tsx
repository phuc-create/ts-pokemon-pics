import React from 'react'
import axios from 'axios'
import { PokemonType } from '../../reducer'

interface PokemonProps {
    idx:number;
    poke:{name:string,url:string};
}

const Pokemon:React.FC<PokemonProps> = ({idx,poke}) => {
    const [singlePokemon,setSinglePokemon] = React.useState<PokemonType>()
    const [showDetails,setShowDetails] = React.useState<boolean>(false)
    
    React.useEffect(()=>{
        const getSinglePokemon = async (api:{name:string,url:string}) => {
            await axios.get(api.url).then(data => setSinglePokemon(JSON.parse(JSON.stringify(data.data))))
        }
        getSinglePokemon(poke)
    },[poke])

    // console.log(singlePokemon && singlePokemon.species,singlePokemon)
  return (
      <>
        <div onClick={()=> setShowDetails(!showDetails)} style={{margin:"20px",cursor:"pointer"}}>{singlePokemon && singlePokemon.id}:{poke.name} - {poke.url.slice(26,poke.url.length - 1)}</div>
        {showDetails ? (
            <div>
                <span>
                { singlePokemon && singlePokemon.name}
                </span>
                <img src={singlePokemon && singlePokemon.sprites.front_default} alt={singlePokemon && singlePokemon.name}/>
                <img src={singlePokemon && singlePokemon.sprites.back_default} alt={singlePokemon && singlePokemon.name}/>
                <img src={singlePokemon && singlePokemon.sprites.front_shiny} alt={singlePokemon && singlePokemon.name}/>
                <img src={singlePokemon && singlePokemon.sprites.back_shiny} alt={singlePokemon && singlePokemon.name}/>
                {/* version:{versions["generation-i"].} */}
                <img width={150} height={150} src={singlePokemon && singlePokemon.sprites.other.dream_world.front_default} alt="hello world" />
                <img width={150} height={150} src={singlePokemon && singlePokemon.sprites.other.home.front_default} alt="hello world" />
                <img width={150} height={150} src={singlePokemon && singlePokemon.sprites.other['official-artwork'].front_default} alt="hello world" />
            </div>
        ): null}
      </>
  )
}

export default Pokemon