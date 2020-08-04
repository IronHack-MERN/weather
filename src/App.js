import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from './components/Form';

function App() {

  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, setConsult] = useState(false);

  const { city, country } = search;

  useEffect ( () => {
    const consultAPI = async () => {

      if(consult){
        const appId = 'dce9c4284c2fcb97c487e0832ed7c55a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const answer = await fetch(url);
        const result = await answer.json();
        console.log(result)
      }
    
    }
    consultAPI();
  }, [consult]);

  return (
    <Fragment>
      <Header title="Weather.app" />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search = {search}
                setSearch = {setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className='col m6 s12'>
              the two
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
