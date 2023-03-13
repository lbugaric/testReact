import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";
import { useState } from "react";

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
    const [ formState, setFormState ] = useState('');
    const [ messages, setMessages ] = useState([]);

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setMessages([ ...messages, {
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        },]);

        setFormState('');
    }

    console.log(formState);

    const messageComponents2 = messages.map((message) => {
        return <Message key={message.id}  avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />;
    });

    return (
        <div>
            Chat page
            <div className="message-list">
                {messageComponents2}
            </div>
            <form onSubmit={handleSubmit}>
                <InputFormField label ="Message" type="text" value={formState} onChange={handleChange} />
                <SubmitFormField label="Send" />
            </form>
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