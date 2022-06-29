import './App.scss';
import { Row, Col } from 'react-bootstrap';
import Navigation from './components/navbar/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Learn from './components/learn/Learn.jsx';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={12}>
          <Navigation />
        </Col>
        <Col md={12}>
          <Learn />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
