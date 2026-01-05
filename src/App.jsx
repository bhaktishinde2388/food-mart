import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./views/Home/Home.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Home />
      <Footer />
    </CartProvider>
  );
};

export default App;
