import './App.css';

import  Header from './components/Header';
import Main from './components/Main'; 
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import  Navbar from './components/NavBar';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Wrapper>
      <Main/>
      <Footer />
      </Wrapper>
    
     
    </div>
  );
}

export default App;
