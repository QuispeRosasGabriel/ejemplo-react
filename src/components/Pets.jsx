import React, { useContext } from 'react'
import { AnimalsListContext } from '../context/AnimalsListContext'
import { CarsListContext } from '../context/CarsListContext';

const Pets = () => {

    const { animalsList } = useContext(AnimalsListContext);
    const { luxuryCars } = useContext(CarsListContext);

    return (
        <div>
            INICIANDO PETS
            {
                animalsList?.map((animal, idx) => (
                    <div key={idx}>
                        <p>{animal?.name}</p>
                        <br />
                        <br />
                        <br />
                        <img src={animal.img} />
                    </div>
                ))
            }
            {luxuryCars.map((luxuryCar, idx) => (
                <div key={idx}>{luxuryCar}</div>
            ))}
            TERMINANDO PETS
        </div>
    )
}

export default Pets
