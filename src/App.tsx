import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import useFavicon from './hooks/useFavicon';

const App: React.FC = () => {
  // useFavicon();
  return (
    <>
      <div className="min-h-screen overflow-x-hidden main">
        <Header position="fixed" />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
