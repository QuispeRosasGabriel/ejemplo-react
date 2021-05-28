import { useEffect, useState } from 'react';
import Cars from './components/Cars';
import ExampleHook from './components/ExampleHook';
import FormPractice from './components/FormPractice';
import FruitsList from './components/FruitsList';
import Pets from './components/Pets';
import PokedexMini from './components/PokedexMini';
import TeacherList from './components/TeacherList';
import UseEffectExample from './components/UseEffectExample';
import AnimalsListProvider from './context/AnimalsListContext';
import CarsListProvider from './context/CarsListContext';
import UserListProvider from './context/UserListContext';


const App = () => {

  const [myState, setMyState] = useState({});


  return (
    <>
      {/* {myState?.results?.map((character, idx) => (
        <div key={idx}>
          <p>{character.name}</p>
          <img src={character?.image} alt='' />
        </div>
      ))} */}
      <CarsListProvider>
        <UserListProvider>
          <AnimalsListProvider>
            {/* <ExampleHook />
            <TeacherList />
            <FruitsList />
            <Cars />
            <Pets /> */}
            {/* <PokedexMini /> */}
            {/* <UseEffectExample /> */}
           <FormPractice />
          </AnimalsListProvider>
        </UserListProvider>
      </CarsListProvider>
    </>
  );
}
export default App;
