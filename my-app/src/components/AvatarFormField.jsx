import { useState } from "react";
import { FormField } from "./FormField";


const avatarImages = ['/avatars/air.png', '/avatars/water.png', '/avatars/earth.png', '/avatars/fire.png'];

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    // props.onChange(index);

    function minusClickToLeft() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function plusClickToRight() {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return(
        <FormField>
            <button type="button" onClick={minusClickToLeft}>Previous</button>
            <img src={avatarImages[index]} />
            <button type="button" onClick={plusClickToRight}>Next</button>
        </FormField>
    );
}