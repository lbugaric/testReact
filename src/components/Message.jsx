import "../styles/Message.css";
import { avatarImages } from "../library/avatar";

export function Message(props) {
    
    return (
        <div className="message">
            <img src={avatarImages[props.avatarIndex]} alt={props.author} width={60} height={60} />
            <div className="message-author">
                <div style={{color: props.usernameColor}}>{props.author}</div>
            </div>
            <div className="message-text">
                <div style={{color: props.messageColor}}>{props.text}</div>
            </div>
        </div>
    );
};