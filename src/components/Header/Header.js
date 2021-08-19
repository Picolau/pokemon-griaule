import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    margin: '12px'
  }
  
  return (
    <header className="Menu">
      <div className="MenuItems">
        <Link style={linkStyles} to="/choose">Escolher</Link>
        <Link style={linkStyles} to="/list">Listar</Link>
      </div>
    </header>
  );
}

export default Header;