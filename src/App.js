import { useEffect, useState } from 'react';
import Cars from './components/Cars';
import ExampleHook from './components/ExampleHook';
import FruitsList from './components/FruitsList';
import Pets from './components/Pets';
import TeacherList from './components/TeacherList';
import AnimalsListProvider from './context/AnimalsListContext';
import CarsListProvider from './context/CarsListContext';
import UserListProvider from './context/UserListContext';

const App = () => {

  const [myState, setMyState] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((resp) => setMyState(resp))
  }, [])

  return (
    <>
      {myState?.results?.map((character, idx) => (
        <div key={idx}>
          <p>{character.name}</p>
          <img src={character?.image} alt='' />
        </div>
      ))}
      <CarsListProvider>
        <UserListProvider>
          <AnimalsListProvider>
            <ExampleHook />
            <TeacherList />
            <FruitsList />
            <Cars />
            <Pets />
          </AnimalsListProvider>
        </UserListProvider>
      </CarsListProvider>
    </>
  );
}
export default App;
