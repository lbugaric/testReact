import { useContext } from "react";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import { Link, Navigate } from "react-router-dom";
import { MessageOfTheDay } from "../components/MessageOfTheDay";


export function SignInPage(props) {
    const context = useContext(AppContext);


    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex)
    }



    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="sign-in-page">
            <MessageOfTheDay />
            <div className="card">
                <SignInForm onSubmit={handleSubmit} />
                <Link to="/faq">Read the FAQ</Link>
            </div>
        </div>
    );
};

/*
Napravit komponentu RandomNameFormField po uzoru na SubmitFormField i u njoj iskoristite RandomNameButton.
Povežite RandomNameFormField sa SignInPage komponentom. 
 */

/*
napravit komponentu MessageOfTheDay i unutra prebacite logiku za dohvaćanje i prikaz poruke iz data.json.
Komponentu iskoristit na SignInPage (bilo gdje) 
*/

/*
prebaciti FaqPage u zasebnu komponentu u mapi pages/
Dodati ispod naslova FAQ link na sign in page
*/