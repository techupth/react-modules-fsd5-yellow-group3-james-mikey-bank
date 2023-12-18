import "./App.css";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import ProductSection from "./components/ProductSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
