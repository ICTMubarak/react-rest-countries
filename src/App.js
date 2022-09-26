import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
