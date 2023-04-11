import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Shop} from './components/Shop'
import { useState } from 'react';

function App() {

  const [whatToShow, setWhatToShow] = useState('fortnite');

  const whatShow = (name) => {
    setWhatToShow(name);
  }

  return (
    <>
      <Header setMode={whatShow}/>
      <Shop mode={whatToShow}/>
      <Footer/>
    </>
  );
}

export default App;
