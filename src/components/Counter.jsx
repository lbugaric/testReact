import { useState } from "react";

/*
koristiti toFixed da definiramo preciznost decimala counter
Omogućiti da se preciznost definira preko props "precision"
ako "precision" nije definiran, koristiti 0 za preciznost
*/

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);
    
    function minusClick() {
        setCount(count - props.step);
    }

    function plusClick() {
        setCount(count + props.step);
    }

    return (
        <div>
            <button onClick={minusClick}>-</button>
            <span>{count.toFixed(props.precision || 0)}</span>
            <button onClick={plusClick}>+</button>
        </div>
    );
}