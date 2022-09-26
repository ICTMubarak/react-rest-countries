import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting every countrys in the world!!</h1>
      <Countries></Countries>
      <h3>abailable countries: {countries.length}</h3>
      {
        countries.map(country => <Coutry name={country.name.common} population = {country.population}></Coutry>)
      }
    </div>
  )
}

function Coutry(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Populations: {props.population}</p>
    </div>
  )
}