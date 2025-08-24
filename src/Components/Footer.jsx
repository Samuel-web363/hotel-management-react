const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Hotel Logo & Description */}
          <div className="footer-logo">
            <h2>SamLuxe Hotel</h2>
            <p className="footer-description">
              Experience unparalleled luxury and sophistication at SamLuxe Hotel. 
              Where every moment becomes an extraordinary memory, and exceptional 
              service meets timeless elegance.
            </p>
            <div className="footer-awards">
              <div className="award-badge">★★★★★</div>
              <div className="award-badge">AAA</div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@samluxehotel.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Luxury Ave, City</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🏨</span>
              <span>Reservations: +1 (555) 987-6543</span>
            </div>
          </div>

          {/* Hotel Services */}
          <div className="footer-links">
            <h3>Hotel</h3>
            <a href="#about">About Us</a>
            <a href="#rooms">Rooms & Suites</a>
            <a href="#amenities">Amenities</a>
            <a href="#dining">Dining</a>
            <a href="#spa">Spa & Wellness</a>
            <a href="#events">Events</a>
          </div>

          {/* Guest Services */}
          <div className="footer-links">
            <h3>Services</h3>
            <a href="#reservations">Reservations</a>
            <a href="#concierge">Concierge</a>
            <a href="#business">Business Center</a>
            <a href="#transportation">Transportation</a>
            <a href="#special-offers">Special Offers</a>
            <a href="#loyalty">Loyalty Program</a>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for exclusive offers, events, and luxury travel insights.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2024 SamLuxe Hotel. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;