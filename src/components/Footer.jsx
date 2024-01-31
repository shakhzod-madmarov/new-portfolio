import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/shakhzod.madmarov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://www.facebook.com/shakhzod.madmarov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/shakhzod-madmarov-010802193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Shakhzod Madmarov</p>
    </div>
  );
}

export default Footer;
