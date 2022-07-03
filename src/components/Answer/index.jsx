import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Answer({ message }) {
    return (
        <div className="answer-container">
            <div className='answer-message'>
                <span>{message}</span>
            </div>
            <div className='answer-options'>
                <span>opção 1</span>
            </div>
        </div>
    );
}

export default Answer;