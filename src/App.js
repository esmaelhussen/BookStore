import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Headers from './components/header';
import Books from './pages/Books';
import Categories from './pages/Categories';

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
