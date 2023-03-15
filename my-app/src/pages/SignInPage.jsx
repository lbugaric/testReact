import { useContext } from "react";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";

export function SingInPage(props) {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex)
    }

    return (
        <div className="sign-in-page">
            <div className="card">
            <SignInForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

/*
Napravit komponentu RandomNameFormField po uzoru na SubmitFormField i u njoj iskoristite RandomNameButton.
Povežite RandomNameFormField sa SignInPage komponentom. 
 */