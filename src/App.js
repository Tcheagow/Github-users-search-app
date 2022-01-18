import './App.css';
import Header from './components/header/header';
import Search from './components/search/search'
function App() {

  return (
    <div className='background'>
      <div className='main'>
        <Header/>
        <Search/>
        <div className='container'>
        </div>
      </div>
    </div>
  );
}

export default App;
