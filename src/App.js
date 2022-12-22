
import './App.css';
import Header from './components/header/Header';
import SubHeaderBlock from './components/header/SubHeaderBlock';
import Sections from './components/sections/Sections';

function App() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      
    <Header />
    <SubHeaderBlock />

    <Sections />

    </div>
  );
}

export default App;
