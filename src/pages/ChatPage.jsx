import { useState } from "react";
import { Message } from "../components/Message";
import { ChatForm } from "../components/ChatForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


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

    const messageComponents2 = messages.map((message) => {
        return <Message key={message.id}  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />;
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
                    return [... messages, data ]
                });
            });
            setReady(true);
        }
    }, [chatRoom, ready]);

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            Chat page
            <button type="button" onClick={handleSignOut}>Sign out</button>
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
/*
const messageComponents2 = messages.map((message) => {
    return <Message key={message.id}  avatarIndex={message.author.avatarIndex} author={context.username} text={message.text} />;
});
*/
/**
     const messageComponents = [];

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];

        messageComponents.push(<Message key={message.id}  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />);
    }

            setMessages([ ...messages, message]);
 */

/*
                    drone.publish({
                        room: 'algebra',
                        message: 'Bok!',
                        id: Date.now(),
                        author: {
                            username: 'Guest',
                        avatarIndex: 0,
                        text: "Bok!"
                    }
 */

/*
    useEffect(() => {

        const drone = new window.Scaledrone('hvmire8vuh268QtB');

            drone.on('open', (error) => {
                if (error) {
                    console.log(error);
                } else {
                    const room = drone.subscribe('algebra');

    
                    room.on('data', (data) => {
                        setMessages([... messages, data ]);
                    });

                    setClient(drone);
                    setChatRoom(room);
                });
        }
    });
    }, []);

    useEffect (() => {
        if (chatRoom !== null) {
            chatRoom.on('data', (data) => {
                setMessages([... messages, data ]);
            });
        }
    }, [chatRoom]);
*/

/*
probajte, dodati uz svaku poruku napisat datum i vrijeme kada je poruka stigla.
doradit izgled poruka sa (css)
*/