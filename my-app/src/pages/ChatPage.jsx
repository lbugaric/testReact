import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";

export function ChatPage(props) {
    return (
        <div>
            Chat page
            <div className="message-list">
                <Message  author="Leon" text="Lorem ipsilon"/>
                <Message  author="Leopold" text="Lorem ipsilon drugi"/>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};