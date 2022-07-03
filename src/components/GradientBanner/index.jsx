import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function GradientBanner() {
    return (
        <div className="banner-container">
            <div className="banner-title">
                <FontAwesomeIcon className="banner-title-icon" icon={faChalkboardTeacher} />
                <span className="banner-title-text">Intimus® nas Escolas</span>
            </div>
            <div className="banner-desc">
                <span>Conteúdos feitos especialmente para ajudar você na jornada de autoconhecimento íntimo</span>
            </div>
        </div>

    );
}

export default GradientBanner;