import { Route, Routes } from 'react-router';
import { NavBar } from './components/NavBar/NavBar';
import { JokePage } from './pages/JokePage';

function App() {
  return (
    <>
      <NavBar />

      <div style={{ marginLeft: '270px', padding: '20px' }}>
        <Routes>
          <Route path="/:category" element={<JokePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;