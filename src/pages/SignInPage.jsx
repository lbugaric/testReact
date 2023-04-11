import { useContext } from "react";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import { Link, Navigate } from "react-router-dom";
import { MessageOfTheDay } from "../components/MessageOfTheDay";
import "../styles/SignInPage.css";


export function SignInPage(props) {
    const context = useContext(AppContext);


    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
        context.setUsernameColor(formData.usernameColor);
        context.setMessageColor(formData.messageColor);
    }



    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="sign-in-page">
            <MessageOfTheDay />
            <div className="card">
                <SignInForm onSubmit={handleSubmit} />
                <div className="card-links">
                    <Link to="/faq">Read the FAQ</Link>
                </div>
            </div>
        </div>
    );
};
