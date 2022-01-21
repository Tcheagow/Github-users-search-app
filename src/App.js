import React, {useEffect, useState} from 'react';

import './App.css';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Theme/Global';

import { lightTheme, darkTheme } from './Theme/Theme';

import Header from './components/header/Header';
import Search from './components/search/Search';
import Container from './components/container/Container'

const theme = window.matchMedia('(prefers-color-scheme: light)').matches;

function App() {
  const [white, setWhite] = useState(theme);
  const [nick, setNick] = useState("");
  const [click, setClick] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect( () => {
    if(nick !== "" && click === true){
      const url = 'https://api.github.com/users/' + nick;

      fetch(url)
      .then(response => response.json())
      .then(data => setRepositories(data));

      setClick(false)
      setNick("")
    }
  }, [click]);
  
  return (
    <ThemeProvider theme={white?lightTheme:darkTheme}>
      <div className='background'>
        <div className='main'>
          <Header white={white} setWhite={setWhite}/>
          <Search nick={nick} setNick={setNick} setClick={setClick}/>
          <Container repositories={repositories} white={white}/>
        </div>
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
