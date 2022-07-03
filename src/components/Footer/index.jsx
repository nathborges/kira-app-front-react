import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendarAlt, faComment, faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './styles.css';
import { Link, NavLink } from 'react-router-dom';

function Footer() {

    return (
        <div className="footer">
            <NavLink to="/" className="footer-link">
                <FontAwesomeIcon icon={faCalendarAlt} color="#626162" />
                <span className="footer-link-text">calendário</span>
            </NavLink>
            <NavLink to="/articles" className="footer-link">
                <FontAwesomeIcon icon={faBook} color="#626162" />
                <span className="footer-link-text">conteúdo</span>
            </NavLink>
            <NavLink to="/" className="footer-link">
                <FontAwesomeIcon icon={faHome} color="#fff" />
            </NavLink>
            <NavLink to="/chat" className="footer-link">
                <FontAwesomeIcon icon={faComment} color="#626162" />
                <span className="footer-link-text">chama a kira</span>
            </NavLink>
            <NavLink to="/" className="footer-link">
                <FontAwesomeIcon icon={faShoppingCart} color="#626162" />
                <span className="footer-link-text">shopping</span>
            </NavLink>
        </div>
    );
}

export default Footer;