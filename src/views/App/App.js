import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';
import Header from '../../components/Header/Header'

const App = () => {
  return (
    <Router basename="/">
      <div className='app'>
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
