// const Header = require("./Components/Header")
import "./app.css";
import Header from "./Components/Header/Header";
import { MainContent } from "./Components/MainContent/MainContent";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
