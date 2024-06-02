import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header position="fixed" />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
