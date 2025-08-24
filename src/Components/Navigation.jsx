import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-bar">
          {/* Hotel Logo */}
          <Link to="/" className="nav-logo">
            <h2>SamLuxe Hotel</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
            <Link to="/rooms" className={isActive("/rooms") ? "active" : ""}>
              Rooms & Suites
            </Link>
            <Link to="/dining" className={isActive("/dining") ? "active" : ""}>
              Dining
            </Link>
            <Link to="/amenities" className={isActive("/amenities") ? "active" : ""}>
              Amenities
            </Link>
            <Link to="/experiences" className={isActive("/experiences") ? "active" : ""}>
              Experiences
            </Link>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="nav-auth">
            <Link to="/signup" className="btn register">
              Sign Up
            </Link>
            <Link to="/signin" className="btn signin">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav>
              <Link
                to="/"
                className={isActive("/") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className={isActive("/rooms") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms & Suites
              </Link>
              <Link
                to="/dining"
                className={isActive("/dining") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </Link>
              <Link
                to="/amenities"
                className={isActive("/amenities") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link
                to="/experiences"
                className={isActive("/experiences") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="mobile-auth">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;