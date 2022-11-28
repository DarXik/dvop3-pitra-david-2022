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
              <img src="./logo.png" alt="logo" />
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
            <PortfolioItem img="../src/IMG_1763.JPG" title="Portfolio Title" text="Lorem Ipsum"></PortfolioItem>
            
            <div class="content-3">
              <div class="content-3-image">
                <img src="./IMG_1763.JPG" alt="image" />
              </div>
              <div class="content-3-title">
                <h3>Project Title</h3>
              </div>
              <div class="content-3-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolor omnis, aut corrupti laborum provident culpa
                  aspernatur perferendis ex dolores magni corporis inventore
                  possimus sunt, odit rerum unde dolorem. Sit?
                </p>
              </div>
            </div>
            <div class="content-4">
              <div class="content-4-image">
                <img src="./IMG_1763.JPG" alt="image" />
              </div>
              <div class="content-4-title">
                <h3>Project Title</h3>
              </div>
              <div class="content-4-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolor omnis, aut corrupti laborum provident culpa
                  aspernatur perferendis ex dolores magni corporis inventore
                  possimus sunt, odit rerum unde dolorem. Sit?
                </p>
              </div>
            </div>
            <div class="content-5">
              <div class="content-5-image">
                <img src="./IMG_1763.JPG" alt="image" />
              </div>
              <div class="content-5-title">
                <h3>Project Title</h3>
              </div>
              <div class="content-5-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolor omnis, aut corrupti laborum provident culpa
                  aspernatur perferendis ex dolores magni corporis inventore
                  possimus sunt, odit rerum unde dolorem. Sit?
                </p>
              </div>
            </div>
            <div class="content-6">
              <div class="content-6-image">
                <img src="./IMG_1763.JPG" alt="image" />
              </div>
              <div class="content-6-title">
                <h3>Project Title</h3>
              </div>
              <div class="content-6-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolor omnis, aut corrupti laborum provident culpa
                  aspernatur perferendis ex dolores magni corporis inventore
                  possimus sunt, odit rerum unde dolorem. Sit?
                </p>
              </div>
            </div>
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
export default App;
