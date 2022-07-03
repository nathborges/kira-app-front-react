import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendarAlt, faComment, faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './styles.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-link">
                <FontAwesomeIcon icon={faCalendarAlt} color="#626162" />
                <span className="footer-link-text">calendário</span>
            </div>
            <div className="footer-link">
                <FontAwesomeIcon icon={faBook} color="#626162" />
                <span className="footer-link-text">conteúdo</span>
            </div>
            <div className="footer-link-home">
                <FontAwesomeIcon icon={faHome} color="#fff" />
            </div>
            <div className="footer-link">
                <FontAwesomeIcon icon={faComment} color="#626162" />
                <span className="footer-link-text">chama a kira</span>
            </div>
            <Link to="/chat" className="footer-link">
                <FontAwesomeIcon icon={faShoppingCart} color="#626162" />
                <span className="footer-link-text">shopping</span>
            </Link>
        </div>
    );
}

export default Footer;