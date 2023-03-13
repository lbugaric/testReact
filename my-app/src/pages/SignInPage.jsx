import { useState } from "react";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";
import { Button } from "../components/Button";
import { AvatarFormField } from '../components/AvatarFormField';

export function SingInPage(props) {
    const [ formState, setFormState ] = useState(getRandomName());
    const [ avatar, setAvatar ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit( {
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }

    console.log(avatar);

    console.log(formState);


    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <AvatarFormField onChange={handleAvatarChange} />
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange} value={formState} />
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