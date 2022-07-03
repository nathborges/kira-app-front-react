import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

function HomeContainer() {
  return (
    <div className="home-container">
      <div className="home-title">
        <FontAwesomeIcon className="home-title-icon" icon={faCalendarAlt} color="#fff" />
        <span className="home-title-text">calendário menstrual</span>
      </div>
      <div className="home-desc">
        <span className="home-desc-text">insira os dados do seu ciclo menstrual</span>
        <span className="home-desc-text">para acompanhar todos os detalhes!</span>
        <button className="home-desc-button">criar meu calendário</button>
      </div>
    </div>
  );
}

export default HomeContainer;