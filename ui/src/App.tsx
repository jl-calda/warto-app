import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <main className="text-stone-700 max-w-6xl container mx-auto min-h-screen flex flex-col">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
