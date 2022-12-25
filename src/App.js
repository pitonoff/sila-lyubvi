import About from "./global/About";
import Footer from "./global/Footer";
import Topbar from "./global/TopBar";
import './styles.css';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
