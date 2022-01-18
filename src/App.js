import React, {useState} from 'react';

import './App.css';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from './StyledComponent/Global';

import { darkTheme } from './StyledComponent/Theme';
import { lightTheme } from './StyledComponent/Theme';

import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  const [white, setWhite] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
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
