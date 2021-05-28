import React, {useEffect, useState} from 'react'
import errorHandler from '../helpers/errorHandler';

const PokedexMini = () => {

    const [namePokemon, setNamePokemon] = useState('pikachu')

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
    //       .then((res) => res.json())
    //       .then((resp) => console.log(resp))
    //   }, [namePokemon])

      const handleSearchPokemon = (ev) => {
        const namePokemon = ev.currentTarget.value;  
        setNamePokemon(namePokemon)
      }

      const handleClickPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .catch((err) => errorHandler(err.msg, err.os, err.hr))
      }

    return (
        <div>
            <input type="text" value={namePokemon} onChange={(ev) => handleSearchPokemon(ev)} name="" id="" />
            <button onClick={() => handleClickPokemon()}>Buscar</button>
            {namePokemon.height}
            {/* {
                namePokemon !== 'pikachu' &&
                <img src={namePokemon.sprites.front_default} alt="" />
            } */}
        </div>
    )
}

export default PokedexMini
