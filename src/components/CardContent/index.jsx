import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

function CardContent({ iconTitle, iconLink, title, desc, descLink }) {

  return (
    <div className="card-content">
      <div className="card-title">
        <FontAwesomeIcon className="card-title-icon" icon={iconTitle} color="rgb(247, 10, 129)" />
        <span className="card-title-text">{title}</span>
      </div>
      <div className="card-desc">
        <span>{desc}</span>
      </div>
      <div className="card-link">
        <FontAwesomeIcon icon={iconLink} color="rgb(247, 10, 129)" />
        <span>{descLink}</span>
      </div>
    </div>
  );
}

export default CardContent;