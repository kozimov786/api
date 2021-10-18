import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key= d43fc3e2291e47079b680244211710&q=Madrid')
      .then(data => {
        setWeather(data.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(weather);
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const searchHandler = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key= d43fc3e2291e47079b680244211710&q=${input}`)
      .then((data) => {
        setWeather(data.data)
      })
  }

  return (
    <div className="App">
      {weather && (
        <Wrapper>
          <div>
            <input onChange={inputHandler} type="text" placeholder='Search by Capital..' />
            <button onClick={searchHandler}>Click</button>
          </div>
          <h2>Capital:{weather.location.name}</h2>
          <h2>Country:{weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="" />
          <p>Current Time: {weather.location.localtime}</p>
        </Wrapper>

      )}
    </div>
  );
}
const Wrapper = styled.div`
 width: 1440px;
 padding-left: 20px;
 padding-right: 20px;
 margin-left: auto;
 margin-right: auto;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 100vh;
  background-color: #f2f2f2;
  input{
    border: none;
    padding:10px 20px;
    width: 200px;
    margin-right: 20px;
  }
  button{
    border: none;
    background-color: #27d997;
    color: #000;
    cursor: pointer;
    padding: 10px 40px;
    border-radius: 10px;
    &:hover{
      color: #27d997;
      background-color: #fff;
      box-shadow:inset 0px 0px 0px 1px #27d997;
    }
  }

`
export default App;
