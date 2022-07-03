import intimusLogo from "../../assets/icons/intimusLogo.svg";
import './styles.css';

function IntimusFooter() {

    return (
        <div className="intimus-footer">
            <span className="intimus-text">criado por</span>
            <img src={intimusLogo} alt="intimus logo" />
            <span className="intimus-text">o contéudo oferecido por Kira não substitui uma consulta médica</span>
        </div>
    );
}

export default IntimusFooter;