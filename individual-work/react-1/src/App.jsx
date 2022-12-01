import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./style.css";
import PortfolioItem from "./components/portfolioItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <div class="nav-container">
          <div class="nav-left">
            <div class="nav-logo">
              <img src="../src/logo.png" alt="logo" />
            </div>
            <div class="nav-buttons-1">
              <div class="about-button">
                <button>About</button>
              </div>
              <div class="services-button">
                <button>Services</button>
              </div>
              <div class="portfolio-button">
                <button>Portfolio</button>
              </div>
            </div>
          </div>
          <div class="nav-right">
            <div class="nav-buttons-2">
              <div class="contact-button">
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div class="main-container">
          <div class="main-title">
            <h1>
              Portfolio <span>Recent Work</span>
            </h1>
          </div>
          <hr />
          <div class="main-content">
            <PortfolioItem classN="content-1" />
            <PortfolioItem classN="content-2" />
            <PortfolioItem classN="content-3" />
            <PortfolioItem classN="content-4" />
            <PortfolioItem classN="content-5" />
            <PortfolioItem classN="content-6" />
          </div>
        </div>
      </main>
      <footer>
        <div class="footer-container">
          <p>Copyright Example 2015</p>
        </div>
      </footer>
    </div>
  );
}
PortfolioItem.defaultProps = {
  img: "../src/IMG_1763.JPG",
  title: "Portfolio Title",
  text: "Lorem Ipsumuisdfggoiuhadsouifhasofuhapoiudfpoaiusdjhfpoiui",
};
export default App;