import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PostPage from "./pages/PostPage";
import Register from "./pages/Register";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PostRoom from "./pages/PostRoom";

const App = () => {
  return (
    <main className="text-stone-700 max-w-6xl container mx-auto min-h-screen flex flex-col">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post" element={<PostRoom />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
