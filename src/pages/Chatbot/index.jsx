
import './styles.css'
import { faBook, faShoppingCart, faComment, faPlusCircle, faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import sendMessage from '../../assets/icons/sendMessage.svg';
import kiraLogo from '../../assets/kiraLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Chatbot() {

    return (
        <div className="chatbot">
            <header className='chatbot-header'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <div className='chatbot-header-user'>
                    <img src={kiraLogo} className='chatbot-header-icon' alt="kira" />
                    <div className='chatbot-header-user-text'>
                        <span className='chatbot-header-user-text-title'>Chama a kira</span>
                        <span className='chatbot-header-user-text-status'>online</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faBars} />
            </header>
            <div className='chatbot-message-container'>
                <input placeholder='Escreva sua mensagem...' type="text" className='chatbot-message-container-input' />
                <img src={sendMessage} className="chatbot-message-container-icon" alt="message icon" />
            </div>
        </div>
    )
}

export default Chatbot

