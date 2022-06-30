import './App.scss';
import { Row, Col } from 'react-bootstrap';
import Navigation from './components/navbar/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Learn from './components/learn/Learn.jsx';
import Contact from './components/contact/Contact.jsx';
import Table from './components/dashboard/Table.jsx';
import Graph from './components/dashboard/Graph.jsx';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={12}>
          <Navigation />
        </Col>
        <Col md={12}>
          <Graph 
            label="Most Positive Sentiments"
            color='#27C225'
            data={[90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}
          />
          <Graph 
            label="Most Negative Sentiments"
            color='#C42121'
            data={[40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30]}
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
