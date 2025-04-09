import { Link } from 'react-router-dom';
import profile from '../asset/profile.png';

function Header() {
  return (
    <header className="flex items-center gap-10 bg-white py-6 px-[5%] border-b border-w1">
      <h1 className="text-3xl font-bold font-sans text-[#0290ff]">BookStore CMS</h1>
      <ul className="flex gap-10 grow">
        <li className="opacity-50 uppercase">
          <Link to="/">Books</Link>
        </li>
        <li className="opacity-50 uppercase">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <img src={profile} alt="profile" className="cursor-pointer w-12 h-12 border-r rounded-full border border-w1 bg-white" />
    </header>
  );
}

export default Header;
