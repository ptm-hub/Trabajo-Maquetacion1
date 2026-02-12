import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2023 EduMarketing. All rights reserved.  
        Privacy Policy | Cookies | Terms of Sale
      </p>

      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">Figma</a>
      </div>

      <div className="social">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
