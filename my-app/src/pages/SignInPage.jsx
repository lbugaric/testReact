import { useState } from "react";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";
import { Button } from "../components/Button";
import { AvatarFormField } from '../components/AvatarFormField';

export function SingInPage(props) {
    const [ formState, setFormState ] = useState(getRandomName());

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    console.log(formState);


    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange} value={formState} />
                    <AvatarFormField />
                    <FormField>
                        <RandomNameButton onRandomName={handleUsernameChange} />
                    </FormField>
                    <FormField>
                        <Button type="submit" label="Sign in" />
                    </FormField>
                </form>
            </div>
        </div>
    );
};

/*
Napravit komponentu RandomNameFormField po uzoru na SubmitFormField i u njoj iskoristite RandomNameButton.
Povežite RandomNameFormField sa SignInPage komponentom. 
 */