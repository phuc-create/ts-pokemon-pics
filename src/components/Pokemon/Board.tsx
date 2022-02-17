import React from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import { PokemonType } from '../../reducer'

const Board = () => {
    const [current,setCurrent] = React.useState<number>(1)
    const [perPage] = React.useState<number>(20)
    const [pokemons,setPokemons] = React.useState<[]>([])
    const Api = 'https://pokeapi.co/api/v2/pokemon?limit=400&offset=1'
    React.useEffect( ()=>{
        const fetchPokemon  = async () =>{
            await axios.get(Api).then(data => setPokemons(data.data.results)).catch(err => console.log(err))
        }
        fetchPokemon()
    },[])

    const lastPokemon = current * perPage
    const firstPokemon = lastPokemon - perPage
    const currentPokemon = pokemons.slice(firstPokemon,lastPokemon)

    const numberOfPage = []
    for(let i = 1;i < Math.ceil(pokemons.length / perPage);i++){
        numberOfPage.push(i)
    }
  return (
    <>
        <div>list pokemon</div>
        <ul>
            {currentPokemon && currentPokemon.map((pokemon,idx)=>{
                return (
                    <Pokemon key={idx} idx={idx} poke={pokemon} />
                )
            })
        }
        </ul>
        <div>
            <ul style={{display:"flex",listStyle:"none"}}>
                {numberOfPage.map((n,i)=>{
                    return(
                        <li style={{border:"1px solid",padding:"0px 5px 0px 10px",cursor:"pointer"}} key={i} id={n+""} onClick={()=> setCurrent(i)} >{n}</li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Board