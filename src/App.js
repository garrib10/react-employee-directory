import './App.css';

import  Header from './components/Header';
import Main from './components/Main'; // Module Error can't be found with api route  
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div>
      <Header />
  
      <Wrapper>
      <Main/>
      <Footer />
      </Wrapper>
    
     
    </div>
  );
}

export default App;
