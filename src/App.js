import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
    <div className="mt-5 p-5">
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotel/:id" element={<RestaurantDetails/>}></Route>
        </Routes>
      </Container>
    </div>
    
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
