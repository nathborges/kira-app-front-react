import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function InfoWhiteCard() {
  return (
    <div className="info-white-card">
      <FontAwesomeIcon className="info-white-card-icon" icon={faBook} color='#f62459' />
      <span className="info-white-card-text">personalize o app para que possamos trazer conteúdos especialmente para você.</span>
    </div>
  );
}

export default InfoWhiteCard;