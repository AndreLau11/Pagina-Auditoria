import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import UploadFlow from "./pages/UploadFlow/UploadFlow";
import ResumenPage from "./pages/ResumenPage/ResumenPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadFlow />} />
          <Route path="/resumen" element={<ResumenPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;