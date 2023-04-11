import { useState } from "react";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";
import { Button } from "../components/Button";
import { AvatarFormField } from '../components/AvatarFormField';


export function SignInForm(props) {
    const [ formState, setFormState ] = useState(getRandomName());
    const [ avatar, setAvatar ] = useState('');
    const [ nameColor, setNameColor ] = useState('black');
    const [ textColor, setTextColor ] = useState('greenyellow');

    
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit( {
            username: formState,
            avatarIndex: avatar,
            usernameColor: nameColor,
            messageColor: textColor,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }

    function handleNameColorChange(event) {
        setNameColor(event.target.value)
    }

    function handleTextColorChange (event) {
        setTextColor(event.target.value)
    }



    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <AvatarFormField onChange={handleAvatarChange} />
            <p>You have selected {nameColor}</p>
            <select name='username-color' value={nameColor} onChange={handleNameColorChange}>
                <option value="black">Pick your username color(default black):</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="yellow">Yellow</option>
            </select>
            <p>You have selected {textColor}</p>
            <select name='message-color' value={textColor} onChange={handleTextColorChange}>
                <option value="white">Pick your message text color(default White):</option>
                <option value="greenyellow">Greenyellow</option>
                <option value="pink">Pink</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="yellow">Yellow</option>
            </select>
            <InputFormField label="Username" type="text" onChange={handleUsernameChange} value={formState} />
            <FormField>
                <RandomNameButton onRandomName={handleUsernameChange} />
            </FormField>
            <FormField>
                <Button type="submit" label="Sign in" />
            </FormField>
        </form>
    );
}