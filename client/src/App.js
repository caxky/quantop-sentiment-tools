import './App.scss';
import { Row, Col } from 'react-bootstrap';
import Navigation from './components/navbar/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Learn from './components/learn/Learn.jsx';
import Contact from './components/contact/Contact.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';


function App() {
  return (
    <div className="App">
      <Row>
        <Col sm={12}>
          <Navigation />
        </Col>
        <Col sm={12}>
          <Dashboard
            title="Stocks"
            labels={['MSFT', 'APPL', 'GOOG', 'AMZN', 'PLTR', 'ZOOM', 'FB', 'TWTR', 'YHOO', 'NVDA']}
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
