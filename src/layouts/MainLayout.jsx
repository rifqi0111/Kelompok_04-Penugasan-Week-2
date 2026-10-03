import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-green-100 text-black">
      <Navbar />
      <main className="flex-grow flex flex-col pb-20 gap-[36px] lg:gap-[64px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
