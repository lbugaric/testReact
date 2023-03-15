import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatForm(props) {
    const [ formState, setFormState ] = useState('');

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        });
        setFormState('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <InputFormField label ="Message" type="text" value={formState} onChange={handleChange} />
            <SubmitFormField label="Send" />
        </form>
        );
}