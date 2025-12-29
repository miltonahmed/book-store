import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col px-4">
      <header className="w-11/12 mx-auto">
        <Header />
      </header>
      <main className="flex-1 w-11/12 mx-auto ">
        <Outlet />
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayouts;
