
import './App.css';

import NavBar from './components/NavBar';
import  Header from './components/Header';
//import Main from './components/Main' // Module Error can't be found with api route   
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Wrapper>
    
      </Wrapper>
      <Footer />
     
    </div>
  );
}

export default App;
