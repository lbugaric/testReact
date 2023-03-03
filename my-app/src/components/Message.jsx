import "../styles/Message.css";

export function Message(props) {
    return (
        <div className="message">
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