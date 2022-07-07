import "./App.css"
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header"
import WhyUs from "./Components/WhyUs"
import "./styles/scss/global.scss"
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <WhyUs />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
