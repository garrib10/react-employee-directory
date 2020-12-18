
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div>
      <NavBar />
      <Wrapper>
      <Main />
      </Wrapper>
      <Footer />
     
    </div>
  );
}

export default App;
