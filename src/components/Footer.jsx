import "../styles/Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; {currentYear} Oussama Bensaid</p>
    </div>
  );
}

export default Footer;
