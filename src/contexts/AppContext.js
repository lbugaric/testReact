import React, { useEffect } from "react";
import { useState } from "react";

export const AppContext = React.createContext("Please use AppProvider");

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [ username, setUsername] = useState('');
    const [ avatarIndex, setAvatarIndex ] = useState(0);
    const [ config, setConfig ] = useState(null);
    const [ error, setError ] = useState(null);

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

/*
        console.log(config);
*/

    return (
        <AppContext.Provider value={{
            username: username,
            setUsername: setUsername,
            avatarIndex: avatarIndex,
            setAvatarIndex: setAvatarIndex,
            isSignedIn: username !== '',
            config: config,
            error: error,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

/*
napravit sign out funkciju u context, tako da se moze samo pozvat u daljnem kodu i modulima
*/

/*
u App komponenti ispisat error poruku koja se nalazi u AppContextu
npr. "došlo je do greške: (poruka)"
*/