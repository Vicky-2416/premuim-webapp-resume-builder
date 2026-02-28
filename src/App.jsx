import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';
import ProofPage from './pages/ProofPage';

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/proof" element={<ProofPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
