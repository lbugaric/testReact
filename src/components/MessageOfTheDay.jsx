import { useState } from "react";
import { useEffect } from "react";
import "../styles/MessageOfTheDay.css";

export function MessageOfTheDay () {
    const [ data, setData ] = useState(null);
    const [ shouldFetch, setShouldFetch] = useState(true);

    function handleFetch() {
        setShouldFetch(true);
    }

    useEffect(() => {
        if (shouldFetch === true) {
            fetch("/assets/data.json")
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    setData(json);
                    setShouldFetch(false);
                });
        }
    }, [shouldFetch]);


    if ( data === null) {
        return <div>Loading message of the day...</div>
    }

    return (
        <div className="message-of-the-day">
            <div>{data.message}</div>
            <button type="button" onClick={handleFetch}>MOTD</button>
        </div>
    )
}