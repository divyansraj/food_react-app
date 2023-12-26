import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const loggedInUser = () => {
  //authetication api
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://foodhub.modeltheme.com/wp-content/themes/foodhub/images/logo.png"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getThemeSVG = () => {
    return theme === "light" ? <p>🔅</p> : <p>🌙</p>;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="header">
      <div className="nav-bar">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Recipes</li>
            {/* <li>Pages</li>
            <li>Blog</li> */}
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Cart</li>
            {/* <button className="btn">Submit Recipe</button> */}
          </ul>
        </div>
        {isLoggedIn ? (
          <button className="btn" onClick={() => setIsLoggedIn(false)}>
            LogIn
          </button>
        ) : (
          <button className="btn" onClick={() => setIsLoggedIn(true)}>
            LogOut
          </button>
        )}
        <button className="mode-theme" onClick={toggleTheme}>{getThemeSVG()}</button>
      </div>
      <div className="hero-section">
        <div className="hero-section-left">
          <h1>It is even better than</h1>
          <h1>an expensive cookery book </h1>
          <p>Learn how to make your favorite restaurant’s dishes</p>
        </div>
        <div className="hero-section-right">
        <div className="search-bar">
            <input
              type="text"
              className="input"
              placeholder="I want to make..."
            ></input>
            <button className="btn2">Search</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
