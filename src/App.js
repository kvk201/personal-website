import './App.css';
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


//this is our root react component
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
