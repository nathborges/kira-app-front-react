
import './styles.css'
import { faBook, faShoppingCart, faComment, faPlusCircle, faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import sendMessage from '../../assets/icons/sendMessage.svg';
import kiraLogo from '../../assets/kiraLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Answer from '../../components/Answer';
import { useEffect, useState } from 'react';
import { kiraService } from '../../../services/chabotbot/kira-service';

function Chatbot() {
    const [sessionId, setSessionId] = useState();
    const [text, setText] = useState('');
    const [received, setReceived] = useState([]);

    const startSessionKira = async () => {
        const results = await kiraService.startSession();
        setSessionId(results.data.sessionId)
    }

    const submitMessage = async () => {
        setText('');
        const data = {
            sessionId: sessionId,
            input: {
                message_type: "text",
                text: 'firstContact'
            }
        }

        const results = await kiraService.sendMessage(data);
        const getMessages = (results.data.result.output.generic).filter((message) => message.response_type === 'text').map((message) => message.text)
        setReceived(getMessages.join());
    }

    useEffect(() => {
        startSessionKira();
    }, [])

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
            <div className='chatbot-flow'>
                <Answer message={received} />
            </div>
            <div className='chatbot-message-container'>
                <input placeholder='Escreva sua mensagem...' type="text" className='chatbot-message-container-input' value={text} onChange={(e) => setText(e.target.value)} />
                <img src={sendMessage} className="chatbot-message-container-icon" alt="message icon" onClick={() => submitMessage()} />
            </div>
        </div>
    )
}

export default Chatbot

