import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Header position="fixed" />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
