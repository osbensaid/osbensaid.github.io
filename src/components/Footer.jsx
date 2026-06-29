import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; {currentYear} Oussama Bensaid. All Rights Reserved.</p>
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <KeyboardArrowUpIcon />
      </button>
    </div>
  );
}

export default Footer;
