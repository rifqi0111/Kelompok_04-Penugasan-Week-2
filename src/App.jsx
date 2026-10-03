import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

