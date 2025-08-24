import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Navigation />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">SamLuxe Hotel</span>
          </h1>
          <p>Where luxury meets sophistication. Experience unparalleled comfort and create unforgettable memories in the heart of the city.</p>
          <div className="hero-buttons">
            <Link to="/book" className="btn primary">Reserve Your Stay</Link>
            <Link to="/rooms" className="btn secondary">Explore Rooms</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="section-header">
          <h2>Exceptional Amenities</h2>
          <p>Discover the unparalleled luxury and world-class service that defines SamLuxe Hotel</p>
        </div>
        <div className="features-grid">
          <div className="feature">
            <div className="icon">🏨</div>
            <h3>Luxury Accommodations</h3>
            <p>Elegantly appointed rooms and suites featuring premium furnishings, marble bathrooms, and breathtaking city views.</p>
          </div>
          <div className="feature">
            <div className="icon">🍽️</div>
            <h3>Michelin-Star Dining</h3>
            <p>Savor exceptional cuisine crafted by award-winning chefs in our signature restaurants and intimate dining venues.</p>
          </div>
          <div className="feature">
            <div className="icon">🧘</div>
            <h3>Wellness & Spa</h3>
            <p>Rejuvenate your body and soul at our world-class spa, featuring therapeutic treatments and state-of-the-art fitness facilities.</p>
          </div>
          <div className="feature">
            <div className="icon">🏆</div>
            <h3>Concierge Services</h3>
            <p>Our dedicated concierge team ensures every detail of your stay is perfectly orchestrated for an extraordinary experience.</p>
          </div>
          <div className="feature">
            <div className="icon">🌆</div>
            <h3>Prime Location</h3>
            <p>Situated in the prestigious downtown district, offering easy access to cultural landmarks, shopping, and entertainment.</p>
          </div>
          <div className="feature">
            <div className="icon">🚗</div>
            <h3>Exclusive Transportation</h3>
            <p>Enjoy complimentary luxury transportation service and valet parking for seamless arrivals and departures.</p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION SUITES */}
      <section className="pricing">
        <div className="section-header">
          <h2>Luxury Accommodations</h2>
          <p>Choose from our collection of thoughtfully designed rooms and suites, each offering distinctive comfort and style</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <img
              src="https://images.unsplash.com/photo-1600585152837-2f28b2a09a1f?auto=format&fit=crop&w=800&q=80"
              alt="Deluxe Room at SamLuxe Hotel"
              className="pricing-img"
            />
            <h3>Deluxe Room</h3>
            <p className="price">$285 / night</p>
            <ul>
              <li>King-size bed with premium linens</li>
              <li>Marble bathroom with rainfall shower</li>
              <li>City skyline views</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>24/7 room service</li>
            </ul>
          </div>

          <div className="pricing-card">
            <img
              src="https://images.unsplash.com/photo-1616593987084-1c22c5d9b0db?auto=format&fit=crop&w=800&q=80"
              alt="Executive Suite at SamLuxe Hotel"
              className="pricing-img"
            />
            <h3>Executive Suite</h3>
            <p className="price">$485 / night</p>
            <ul>
              <li>Separate living and sleeping areas</li>
              <li>Floor-to-ceiling windows</li>
              <li>Premium minibar and coffee service</li>
              <li>Exclusive executive lounge access</li>
              <li>Personalized concierge service</li>
            </ul>
          </div>

          <div className="pricing-card">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118b?auto=format&fit=crop&w=800&q=80"
              alt="Presidential Suite at SamLuxe Hotel"
              className="pricing-img"
            />
            <h3>Presidential Suite</h3>
            <p className="price">$875 / night</p>
            <ul>
              <li>Two bedrooms with luxury amenities</li>
              <li>Private terrace with panoramic views</li>
              <li>Dedicated butler and chef service</li>
              <li>Private dining room and kitchen</li>
              <li>Exclusive spa treatment room</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS SECTION */}
      <section className="special-offers" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#f4c542', 
            marginBottom: '20px',
            fontWeight: '300',
            letterSpacing: '2px'
          }}>
            Exclusive Member Benefits
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#ccc', 
            marginBottom: '40px',
            lineHeight: '1.8'
          }}>
            Join our exclusive membership program and unlock premium privileges, special rates, and personalized experiences designed for discerning travelers.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/membership" className="btn primary">
              Discover Membership
            </Link>
            <Link to="/contact" className="btn secondary">
              Speak with Concierge
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Welcome;