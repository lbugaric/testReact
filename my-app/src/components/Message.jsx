import "../styles/Message.css";
import { avatarImages } from "../library/avatar";

export function Message(props) {
    return (
        <div className="message">
            <img src={avatarImages[props.avatarIndex]} alt={props.author} width="100px" height="100px" />
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
};

/*
                <div className="message">
                    <div className="message-author">Username</div>
                    <div className="message-text">Message text</div>
                </div>
*/                