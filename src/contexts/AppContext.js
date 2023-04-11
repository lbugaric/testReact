import React, { useEffect } from "react";
import { useState } from "react";

export const AppContext = React.createContext("Please use AppProvider");

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [ username, setUsername] = useState('');
    const [ avatarIndex, setAvatarIndex ] = useState(0);
    const [ config, setConfig ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ usernameColor, setUsernameColor] = useState('');
    const [ messageColor, setMessageColor ] = useState('');

    useEffect(() => {
        fetch("/assets/config.json")
            .then(response => {
                return response.json();
            })
            .then(json => {
                setConfig(json);
            })
            .catch(error => {
                setError(error);
            });
    }, []);


    return (
        <AppContext.Provider value={{
            username: username,
            setUsername: setUsername,
            avatarIndex: avatarIndex,
            setAvatarIndex: setAvatarIndex,
            usernameColor: usernameColor,
            setUsernameColor: setUsernameColor,
            messageColor: messageColor,
            setMessageColor: setMessageColor,
            isSignedIn: username !== '',
            config: config,
            error: error,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}