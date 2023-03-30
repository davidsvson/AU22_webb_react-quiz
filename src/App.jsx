import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Game from './components/Game'

function App() {

  const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  switch(currentScreen) {
    case WELCOME :
      content = <Welcome nextScreen={() => setCurrentScreen(GAME) }/>;
      break;
    case GAME :
      content = <Game />;
      break;
    default:
      content = null;
  }


  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App
