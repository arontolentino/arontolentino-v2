import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="px-4 max-w-lg mx-auto sm:px-6 lg:px-8 lg:max-w-6xl">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
