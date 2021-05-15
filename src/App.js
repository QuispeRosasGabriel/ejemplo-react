import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ExampleComponent from './components/ExampleComponent';
import TodoList from './components/TodoList';
import MyExampleUser from './components/MyExampleUser';


const App = () => {
  
  const [email, setEmail] = useState(null);
  const [myList, setMyList ] = useState([
    'Perros',
    'Gatos',
    'Gaseosas'
  ]);
  const [isAdmin, setIsAdmin] = useState(true);
  const {setItemFromLocalStorage} = useLocalStorage();
  const myCredential = 'admin';
  useEffect(() => {
    setItemFromLocalStorage('lng', 'es')
  }, [email]);


  const handleClick = (val) => {
    console.log('val', val)
  }

  const handleChangeEmail = (ev) => {
    const myEmail = ev.currentTarget.value;
    setEmail(myEmail);
    setMyList([
      ...myList,
      myEmail
    ])
  }

  const tasks = [
    'Comprar en el mercado',
    'Salir a comprar',
    'Pasear al perro',
    'Leer y estudiar para el examen MERN',
  ]


  const userExample = {
    name: 'pepe',
    lastname: 'perez',
    age: 23,
    city: 'Lima',
    isWorking: true,
  }

  return (
    <>
    <MyExampleUser
    addressUser='Oceano pacifico'
    travelUser='NY'
    {...userExample}
    />
    <div className="App">
      <header className="App-header">
        {/* <MyComponent isAdmin={isAdmin} /> */}
        <MyComponent 
          user='Juan' 
          handleClick={handleClick}
          handleChangeEmail={handleChangeEmail}
        />
        Mi correo
        <br /> 
        {email}
        <br />
        <ul>
          {myList.map((listItem, idx) => (
            <li key={idx}>{listItem}</li>
          )
          )}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
            isAdmin ?
              <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
              : 'No esta autorizado'
          }
        </div>
        <div className={!!isAdmin ? 'ejemplo' : 'ejemplo-dos'}>
          HOLAAAAAAAA
        </div>
      </header>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ExampleComponent
    myCredential={myCredential}
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <TodoList tasks={tasks} />
    </>
  );
}
export default App;
