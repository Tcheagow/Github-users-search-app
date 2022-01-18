import React, {useState} from 'react';

import './App.css';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Theme/Global';

import { lightTheme, darkTheme } from './Theme/Theme';

import Header from './components/header/Header';
import Search from './components/search/Search';

const theme = window.matchMedia('(prefers-color-scheme: light)').matches;

function App() {
  const [white, setWhite] = useState(theme);

  return (
    <ThemeProvider theme={white?lightTheme:darkTheme}>
      <div className='background'>
        <div className='main'>
          <Header white={white} setWhite={setWhite}/>
          <Search/>
          <div className='container'>
          </div>
        </div>
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
