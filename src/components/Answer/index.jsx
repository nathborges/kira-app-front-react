import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Answer({ data, handleOption }) {

    const handleOptionClick = (option) => {
        handleOption(option.input.text);
    }
    return (
        <div className="answer-container">
            {
                data.type === 'received' && (
                    <div className='answer-message'>
                        <span>{data.text}</span>
                    </div>
                )
            }
            {
                data.type === 'send' && (
                    <div className='send-message'>
                        <span>{data.text}</span>
                    </div>
                )
            }
            {
                data.type === 'received' && data.options?.map(option => (
                    <div onClick={() => handleOptionClick(option.value)} className='answer-options'>
                        <span>{option.label}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default Answer;