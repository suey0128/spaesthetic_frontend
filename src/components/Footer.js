import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function Footer() {


  return (

    <footer className="footer">
      <div className="footer-content">
          <h3>Spaesthetic</h3>
          <p>All About Locals</p>
          <ul className="socials">
            <InstagramIcon style={{ fill: "#f4e7dc" }}/>
            <PinterestIcon style={{ fill: "#f4e7dc" }}/>
            <FacebookIcon style={{ fill: "#f4e7dc" }}/>
          </ul>
      </div>
    </footer>

  );
}