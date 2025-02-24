import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import Headers from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
