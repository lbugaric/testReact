import { useState } from "react";
import { Message } from "../components/Message";
import { ChatForm } from "../components/ChatForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";

/**
const messages = [
    {
        id: "1234",
        author: {
            username: "Obrana",
            avatarIndex: 0,
        },
        text: "Lorem ipsum dolor.",
    },
    {
        id: "12345",
        author: {
            username: "Invazija",
            avatarIndex: 2,
        },
        text: "Lorem ipsum dolor drugi.",
    },
];
*/
export function ChatPage(props) {
    const [ messages, setMessages ] = useState([]);
    const context = useContext(AppContext);

    function handleSubmit(message) {
        setMessages([ ...messages, message]);
    }

    const messageComponents2 = messages.map((message) => {
        return <Message key={message.id}  avatarIndex={message.author.avatarIndex} author={context.username} text={message.text} />;
    });

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            Chat page
            <div className="message-list">
                {messageComponents2}
            </div>
            <ChatForm onSubmit={handleSubmit} username={context.username} avatarIndex={context.avatarIndex} />
        </div>
    );
};


/**
                <Message  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />
                <Message  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />
                <Message  author="Leopold" text="Lorem ipsilon drugi"/>
*/
/**
     const messageComponents = [];

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];

        messageComponents.push(<Message key={message.id}  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />);
    }
 */