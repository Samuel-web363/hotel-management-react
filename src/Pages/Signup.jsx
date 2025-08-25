import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/[A-Z]/.test(formData.password)) newErrors.password = "Password must contain at least one capital letter";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (!formData.email) {
        toast.error("Please enter email!");
        setIsLoading(false);
        return;
      }
      if (!formData.password) {
        toast.error("Please enter password!");
        setIsLoading(false);
        return;
      }
      if (!formData.firstName) {
        toast.error("Please enter first name!");
        setIsLoading(false);
        return;
      }
      if (!formData.lastName) {
        toast.error("Please enter last name!");
        setIsLoading(false);
        return;
      }


      const signupData = {
        email: formData.email,
        phoneNumber: formData.phone,
        password: formData.password
      };

      console.log("Sending signup data:", signupData);


      const response = await axios.post("https://task-79s6.onrender.com/api/register", signupData);

      const result = response.data;
      console.log({ result });

      if (result?.status === true || result?.success || result?.data) {
        const accessToken = result?.data?.accessToken;
        const user = result?.data?.user;

        console.log({ accessToken, user });

        if (accessToken) {
          sessionStorage.setItem('accessToken', accessToken);
        }
        if (user) {
          sessionStorage.setItem('user', JSON.stringify(user));
        }

        toast.success(result?.message || "Account created successfully! Welcome to SamLuxe Hotel!");

        navigate("/signin");
      } else {
        toast.error("Signup unsuccessful! Please try again.");
      }

    } catch (error) {
      const errorMsg = error?.response?.data?.message || "An error occurred during signup";
      toast.error(errorMsg);
      console.log({ errorMsg });
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  return (
    <div className="luxury-signup-page">
      <div className="signup-background-overlay"></div>
      <div className="luxury-signup-container">
        {/* Luxury Hotel Logo */}
        <div className="luxury-logo">
          <Link to="/" className="luxury-logo-link">
            <h2>SamLuxe Hotel</h2>
            <div className="logo-stars">★★★★★</div>
          </Link>
        </div>

        {/* Sign Up Form Card */}
        <div className="luxury-signup-card">
          <div className="card-header">
            <h1 className="signup-title">Join Our Exclusive Club</h1>
            <p className="signup-subtitle">
              Create your account and unlock access to luxury accommodations,
              exclusive member benefits, and personalized concierge services.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="luxury-signup-form">
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            {/* Password Fields */}
            <div className="form-row">
              <div className="form-group password-field">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create secure password"
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="form-group password-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="terms-checkbox">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                <span className="terms-text">
                  I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="luxury-btn-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span className="loading-spinner"></span>
                  Creating Your Account...
                </span>
              ) : (
                "Create Luxury Account"
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="signin-section">
            <p className="signin-text">
              Already a member of our exclusive club?{" "}
              <Link to="/signin" className="signin-link">
                Sign In Here
              </Link>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="luxury-navigation">
          <Link to="/" className="nav-link">
            ← Return to Hotel
          </Link>
          <Link to="/contact" className="nav-link">
            Need Assistance?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;