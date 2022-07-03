
import './styles.css'
import { faBook, faShoppingCart, faComment, faPlusCircle, faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import sendMessage from '../../assets/icons/sendMessage.svg';
import kiraLogo from '../../assets/kiraLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Answer from '../../components/Answer';
import { useEffect, useRef, useState } from 'react';
import { kiraService } from '../../../services/chabotbot/kira-service';

function Chatbot() {
    const [sessionId, setSessionId] = useState();
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
      const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

    const startSessionKira = async () => {
        const results = await kiraService.startSession();
        setSessionId(results.data.sessionId)
    }

    const submitMessage = async (textMessage = '') => {
        setText('');
        const data = {
            sessionId: sessionId,
            input: {
                message_type: "text",
                text: textMessage || 'firstContact'
            }
        }
        setMessages((oldMessages) => [...oldMessages, {
            type: 'send',
            text: textMessage || text,
        }])
        const results = await kiraService.sendMessage(data);
        const newMessages = (results.data.result.output.generic).filter((message) => message.response_type === 'text').map((message) => message.text);
        const newOptions = (results.data.result.output.generic).filter((message) => message.response_type === 'option').map((message) => message.options);
        const messagesOptions = {
            type: 'received',
            text: newMessages.join(),
            options: newOptions[0]
        }
        setMessages((oldMessages) => [...oldMessages, messagesOptions]);
    }

    const handleOption = (option) => {
      submitMessage(option)
    }

    useEffect(() => {
        startSessionKira();
    }, [])

    useEffect(() => {
        scrollToBottom();
    }, [messages])

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
                {
                    messages.map(message => (
                        <Answer data={message} handleOption={handleOption}/>
                    ))
                }
                <span ref={messagesEndRef}></span>
            </div>
            <div className='chatbot-message-container'>
                <input placeholder='Escreva sua mensagem...' type="text" className='chatbot-message-container-input' value={text} onChange={(e) => setText(e.target.value)} />
                <img src={sendMessage} className="chatbot-message-container-icon" alt="message icon" onClick={() => submitMessage()} />
            </div>
        </div>
    )
}

export default Chatbot

