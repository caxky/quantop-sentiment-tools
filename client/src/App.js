import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/navbar/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Learn from './components/learn/Learn.jsx';
import Contact from './components/contact/Contact.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';


function App() {
  return (
    <Router>
    <div className="App">      
      <Navigation/>
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/stocks' element={<Dashboard
              title="Stocks"
              labels={['MSFT', 'APPL', 'GOOG', 'AMZN', 'PLTR', 'ZOOM', 'FB', 'TWTR', 'YHOO', 'NVDA']}
            />}/>
            <Route path='/crypto' element={<Dashboard
              title="Cryptocurrency"
              labels={['BTC', 'ETH', 'SOL', 'DOGE', 'ADA', 'AVAX', 'BNB', 'XRP', 'DOT', 'MATIC']}
            />}/>
            <Route path='/learn' element={<Learn/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
