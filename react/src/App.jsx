import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BountyList from "./pages/BountyList";
import CreateBounty from './pages/CreateBounty';
import CodeEditor from "./pages/CodeEditor";

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<BountyList />} />
        <Route path="/create" element={<CreateBounty />} />
        <Route path="/submit" element={<CodeEditor />} />
      </Routes>
    </div>
  )
}

export default App
