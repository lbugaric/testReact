import { useState } from "react";
import { Message } from "../components/Message";
import { ChatForm } from "../components/ChatForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/ChatPage.css";


export function ChatPage(props) {
    const [ messages, setMessages ] = useState([]);
    const [ client, setClient ] = useState(null);
    const [ chatRoom, setChatRoom ] = useState(null);
    const [ ready, setReady ] = useState(false);
    const context = useContext(AppContext);

    function handleSubmit(message) {
        client.publish({
            room: 'algebra',
            message: message,
        });
    }

    function handleSignOut() {
        context.setUsername('');
    }

    const messageComponents = messages.map((message) => {
        return <Message key={message.id}  
        avatarIndex={message.author.avatarIndex} 
        author={message.author.username} 
        text={message.text} 
        usernameColor={message.usernameColor} 
        messageColor={message.messageColor} />;
    });

    useEffect(() => {
        const drone = new window.Scaledrone('hvmire8vuh268QtB');

            drone.on('open', (error) => {
                if (error) {
                    console.log(error);
                } else {
                    const room = drone.subscribe('algebra');

                    setClient(drone);
                    setChatRoom(room);
                }
            });
    }, []);

    useEffect (() => {
        if (chatRoom !== null && !ready) {
            chatRoom.on('data', (data) => {
                setMessages((messages) => {
                    return [ ...messages, data ]
                });
            });
            setReady(true);
        }
    }, [chatRoom, ready]);

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="chat-page-main">
            <div className="chat-page-title">
                <h1>Chat page</h1>
                <button className="chat-page-button" type="button" onClick={handleSignOut}>Sign out</button>
            </div>
            <div className="message-list">
                <div className="message-list-content">
                    {messageComponents}
                </div>
            </div>
            <div className="chat-page-form">
                <ChatForm onSubmit={handleSubmit} username={context.username} 
                avatarIndex={context.avatarIndex} 
                usernameColor={context.usernameColor} 
                messageColor={context.messageColor} />
            </div>
        </div>
    );
};


