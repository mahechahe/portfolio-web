import './App.css';
import Nav from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';
import { SkillSet } from './components/SkillSet/SkillSet';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { Context } from './components/context/Context';
import { useContext } from './components/context/useContext';
import {Contact} from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const contextProvider = useContext();
  const ids = {
    id1 : 'portfolio',
    id2 : 'skillset',
    id3 : 'experience',
    id4 : 'about',
    id5 : 'contact',
  }

  return (
    <Context.Provider value={contextProvider}>
      <div className='div-container--app'>
        <Nav ids={ids}></Nav>
        <Home></Home>
        <Portfolio id={ids.id1}></Portfolio>
        <SkillSet id={ids.id2}></SkillSet>
        <Experience id={ids.id3}></Experience>
        <About id={ids.id4}></About>
        <Contact id={ids.id5}></Contact>
        <Footer></Footer>
      </div>
    </Context.Provider>
  );
}

export default App;
