import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  
  useEffect(() => {
    const userData = {
      name: "Alexandra Sterling",
      email: "alexandra@email.com",
      phone: "+1 (555) 123-4567",
      membershipTier: "Platinum Elite",
      memberSince: "2022",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
      totalStays: 24,
      totalSpent: 12580,
      rewardPoints: 8750,
      nextRewardTier: "Diamond",
      pointsToNext: 1250
    };
    setUser(userData);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
    navigate('/signin');
  };

  const bookingHistory = [
    {
      id: "BK001",
      room: "Presidential Suite",
      dates: "Dec 15-18, 2024",
      status: "Completed",
      amount: "$2,625"
    },
    {
      id: "BK002", 
      room: "Executive Suite",
      dates: "Nov 20-22, 2024",
      status: "Completed",
      amount: "$970"
    },
    {
      id: "BK003",
      room: "Deluxe Room",
      dates: "Jan 10-12, 2025",
      status: "Upcoming",
      amount: "$855"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "booking",
      title: "Booking Confirmation",
      message: "Your reservation for Jan 10-12 has been confirmed",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "reward",
      title: "Rewards Update", 
      message: "You've earned 250 bonus points from your last stay",
      time: "1 day ago",
      unread: true
    },
    {
      id: 3,
      type: "offer",
      title: "Exclusive Offer",
      message: "20% off spa services for Platinum members",
      time: "3 days ago",
      unread: false
    }
  ];

  const quickStats = [
    { label: "Total Stays", value: user?.totalStays || 0, icon: "🛏️" },
    { label: "Reward Points", value: user?.rewardPoints?.toLocaleString() || "0", icon: "⭐" },
    { label: "Total Spent", value: `$${user?.totalSpent?.toLocaleString() || "0"}`, icon: "💳" },
    { label: "Member Since", value: user?.memberSince || "2024", icon: "🏆" }
  ];

  const renderOverview = () => (
    <div className="dashboard-content">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome back, {user?.name?.split(' ')[0] || 'Guest'}!</h1>
          <p>Your luxury experience continues with SamLuxe Hotel</p>
        </div>
        <div className="membership-badge">
          <span className="badge-icon">🏆</span>
          <div>
            <span className="membership-tier">{user?.membershipTier}</span>
            <span className="membership-since">Member since {user?.memberSince}</span>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {quickStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <span>{stat.icon}</span>
            </div>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="recent-bookings card">
          <h3>Recent Bookings</h3>
          <div className="bookings-list">
            {bookingHistory.slice(0, 3).map((booking) => (
              <div key={booking.id} className="booking-item">
                <div className="booking-info">
                  <span className="booking-room">{booking.room}</span>
                  <span className="booking-dates">{booking.dates}</span>
                </div>
                <div className="booking-details">
                  <span className={`booking-status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                  <span className="booking-amount">{booking.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="view-all-btn"
            onClick={() => setActiveTab('bookings')}
          >
            View All Bookings <span>→</span>
          </button>
        </div>

        <div className="rewards-section card">
          <h3>Rewards & Benefits</h3>
          <div className="rewards-content">
            <div className="points-display">
              <span className="points-icon">⭐</span>
              <div>
                <span className="current-points">{user?.rewardPoints?.toLocaleString()} Points</span>
                <span className="points-label">Available to redeem</span>
              </div>
            </div>
            
            <div className="progress-section">
              <div className="progress-header">
                <span>Progress to {user?.nextRewardTier}</span>
                <span>{user?.pointsToNext} points needed</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${((10000 - (user?.pointsToNext || 0)) / 10000) * 100}%` }}
                />
              </div>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">🎁</span>
                <span>Complimentary room upgrades</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🍽️</span>
                <span>Priority dining reservations</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🚗</span>
                <span>Free luxury transportation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <Link to="/book" className="action-card">
            <span className="action-icon">📅</span>
            <span>Book New Stay</span>
            <span>→</span>
          </Link>
          <Link to="/spa" className="action-card">
            <span className="action-icon">🧖‍♀️</span>
            <span>Book Spa Treatment</span>
            <span>→</span>
          </Link>
          <Link to="/dining" className="action-card">
            <span className="action-icon">🍽️</span>
            <span>Reserve Dining</span>
            <span>→</span>
          </Link>
          <Link to="/concierge" className="action-card">
            <span className="action-icon">📞</span>
            <span>Contact Concierge</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Booking History</h2>
        <Link to="/book" className="luxury-btn primary">
          <span>📅</span>
          New Booking
        </Link>
      </div>

      <div className="bookings-section">
        {bookingHistory.map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-header">
              <div className="booking-id">
                <span>Booking #{booking.id}</span>
                <span className={`status-badge ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
              <span className="booking-amount">{booking.amount}</span>
            </div>
            
            <div className="booking-body">
              <div className="booking-details-grid">
                <div className="detail-item">
                  <span className="detail-icon">🛏️</span>
                  <div>
                    <span className="detail-label">Room</span>
                    <span className="detail-value">{booking.room}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <div>
                    <span className="detail-label">Dates</span>
                    <span className="detail-value">{booking.dates}</span>
                  </div>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Downtown SamLuxe</span>
                  </div>
                </div>
              </div>
              
              <div className="booking-actions">
                <button className="action-btn secondary">View Details</button>
                {booking.status === 'Upcoming' && (
                  <>
                    <button className="action-btn primary">Modify</button>
                    <button className="action-btn danger">Cancel</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Profile Settings</h2>
        <button className="luxury-btn primary">
          <span>⚙️</span>
          Edit Profile
        </button>
      </div>

      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-header">
            <img 
              src={user?.avatar} 
              alt="Profile"
              className="profile-avatar"
            />
            <div className="profile-info">
              <h3>{user?.name}</h3>
              <p>{user?.membershipTier} Member</p>
              <div className="member-since">
                <span>🏆</span>
                <span>Member since {user?.memberSince}</span>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-group">
              <h4>Contact Information</h4>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{user?.email}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{user?.phone}</span>
                </div>
              </div>
            </div>

            <div className="detail-group">
              <h4>Membership Details</h4>
              <div className="membership-stats">
                <div className="membership-stat">
                  <span className="stat-number">{user?.totalStays}</span>
                  <span className="stat-label">Total Stays</span>
                </div>
                <div className="membership-stat">
                  <span className="stat-number">{user?.rewardPoints?.toLocaleString()}</span>
                  <span className="stat-label">Reward Points</span>
                </div>
                <div className="membership-stat">
                  <span className="stat-number">${user?.totalSpent?.toLocaleString()}</span>
                  <span className="stat-label">Total Spent</span>
                </div>
              </div>
            </div>

            <div className="detail-group">
              <h4>Preferences</h4>
              <div className="preferences-list">
                <div className="preference-item">
                  <span>Room Preference</span>
                  <span>High Floor, City View</span>
                </div>
                <div className="preference-item">
                  <span>Bed Type</span>
                  <span>King Size</span>
                </div>
                <div className="preference-item">
                  <span>Amenities</span>
                  <span>Late Checkout, Room Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="luxury-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <Link to="/" className="dashboard-logo">
            <h2>SamLuxe Hotel</h2>
            <span className="logo-stars">★★★★★</span>
          </Link>

          <div className="header-actions">
            <div className="notification-dropdown">
              <button 
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <span>🔔</span>
                <span className="notification-badge">2</span>
              </button>
              
              {showNotifications && (
                <div className="notifications-panel">
                  <div className="notifications-header">
                    <h4>Notifications</h4>
                    <button onClick={() => setShowNotifications(false)}>×</button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.unread ? 'unread' : ''}`}
                      >
                        <div className="notification-content">
                          <h5>{notification.title}</h5>
                          <p>{notification.message}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                        {notification.unread && <div className="unread-dot" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <img 
                src={user?.avatar} 
                alt="User" 
                className="user-avatar"
              />
              <span className="user-name">{user?.name?.split(' ')[0]}</span>
              <button 
                className="logout-btn"
                onClick={handleLogout}
                title="Logout"
              >
                <span>🚪</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <div className="nav-content">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>🏠</span>
            <span>Overview</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <span>📅</span>
            <span>Bookings</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span>👤</span>
            <span>Profile</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'bookings' && renderBookings()}
        {activeTab === 'profile' && renderProfile()}
      </main>
    </div>
  );
};

export default Dashboard;