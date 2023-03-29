import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";
import { useEffect } from "react";


export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        props.onChange(index);
    }, [index, props]);
    

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
            <img src={avatarImages[index]} alt={index} width={100} />
            <button type="button" onClick={plusClickToRight}>Next</button>
        </FormField>
    );
}