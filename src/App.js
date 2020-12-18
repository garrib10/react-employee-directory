
import './App.css';

import NavBar from './components/NavBar';
import  Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Wrapper>
      <Main />
      </Wrapper>
      <Footer />
     
    </div>
  );
}

export default App;
