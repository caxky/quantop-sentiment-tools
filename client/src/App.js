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
            <Route path='/stocks/overall' element={<Dashboard
              title="Stocks"
              subtitle="Overall"
            />}/>
            <Route path='/stocks/news' element={<Dashboard
              title="Stocks"
              subtitle="News"
            />}/>
            <Route path='/stocks/Reddit' element={<Dashboard
              title="Stocks"
              subtitle="Reddit"
            />}/>
            <Route path='/stocks/Twitter' element={<Dashboard
              title="Stocks"
              subtitle="Twitter"
            />}/>
            <Route path='/crypto/overall' element={<Dashboard
              title="Cryptocurrency"
              subtitle="Overall"
            />}/>
            <Route path='/crypto/news' element={<Dashboard
              title="Cryptocurrency"
              subtitle="News"
            />}/>
            <Route path='/crypto/reddit' element={<Dashboard
              title="Cryptocurrency"
              subtitle="Reddit"
            />}/>
            <Route path='/crypto/twitter' element={<Dashboard
              title="Cryptocurrency"
              subtitle="Twitter"
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
