import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";

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

      const signinData = {
        identifier: formData.email,
        password: formData.password
      };

      console.log("Sending signin data:", signinData);

      const response = await axios.post("https://task-79s6.onrender.com/api/login", signinData);

      const result = response.data;
      console.log({ result });

      if (result?.status === true || result?.success) {
        const accessToken = result?.data?.accessToken;
        const user = result?.data?.user;

        console.log({ accessToken, user });

        if (accessToken) {
          sessionStorage.setItem('accessToken', accessToken);


          toast.success(result?.message || "Welcome back to SamLuxe Hotel!");


          navigate("/dashboard");
        } else {
          toast.error("Login unsuccessful! Please check your credentials.");
        }
      } else {
        toast.error("Login unsuccessful! Please check your credentials.");
      }

    } catch (error) {
      console.log("Full error object:", error);
      console.log("Error response:", error.response);
      console.log("Error message:", error.message);

      let errorMsg = "An error occurred during signin";

      if (error?.response?.data?.message) {
        const apiMessage = error.response.data.message;
        // Handle array of error messages
        if (Array.isArray(apiMessage)) {
          errorMsg = apiMessage.join(". ");
        } else {
          errorMsg = apiMessage;
        }


        if (errorMsg.toLowerCase().includes('invalid credentials') ||
          errorMsg.toLowerCase().includes('incorrect password') ||
          errorMsg.toLowerCase().includes('user not found')) {
          errorMsg = "Invalid email or password. Please check your credentials and try again.";
        }
      } else if (error.message) {
        errorMsg = error.message;
      }

      toast.error(errorMsg);
      console.log({ errorMsg });
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
    <div className="luxury-signin-page">
      <div className="signin-background-overlay"></div>
      <div className="luxury-signin-container">
        {/* Luxury Hotel Logo */}
        <div className="luxury-logo">
          <Link to="/" className="luxury-logo-link">
            <h2>SamLuxe Hotel</h2>
            <div className="logo-stars">★★★★★</div>
          </Link>
        </div>

        {/* Sign In Form Card */}
        <div className="luxury-signin-card">
          <div className="card-header">
            <h1 className="signin-title">Welcome Back</h1>
            <p className="signin-subtitle">
              Sign in to your exclusive account and continue enjoying our
              luxury accommodations and premium services.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="luxury-signin-form">
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

            {/* Password Field */}
            <div className="form-group password-field">
              <label>Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
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

            {/* Remember Me & Forgot Password */}
            <div className="signin-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
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
                  Signing In...
                </span>
              ) : (
                "Sign In to Your Account"
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="signup-section">
            <p className="signup-text">
              New to our exclusive club?{" "}
              <Link to="/signup" className="signup-link">
                Create Account
              </Link>
            </p>
          </div>

          {/* Social Login Options */}
          <div className="social-signin">
            <div className="divider">
              <span>or continue with</span>
            </div>
            <div className="social-buttons">
              <button className="social-btn google-btn">
                <span>🔍</span>
                Google
              </button>
              <button className="social-btn apple-btn">
                <span>🍎</span>
                Apple
              </button>
            </div>
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

export default Signin;