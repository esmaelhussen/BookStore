import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
