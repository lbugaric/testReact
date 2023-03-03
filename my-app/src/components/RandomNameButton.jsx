const adjectives = ['round', 'ignited', 'chunky'];
const nouns = ['butter', 'apple', 'flower'];

function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }

    return (
        <button type="button" onClick={handleClick}>Generate random name</button>
    );
}