import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" />
          <h2>NSTV</h2>
          <p>Your trusted source for latest news.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h4>Categories</h4>
          <a href="/category/politics">Politics</a>
          <a href="/category/technology">Technology</a>
          <a href="/category/sports">Sports</a>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h4>Connect</h4>
          <p>Email: news@abcd.com</p>
          <p>Phone: +91 9XXXXXXXXX</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NSTV News. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
