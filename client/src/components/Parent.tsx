import { useState } from "react";
import { Display } from "./Display";
import { ChildInput } from "./ChildInput";

export const Parent = () => {
    const [text, setText] = useState("");
    return (
        <>
        <ChildInput OnChange={setText} />
        <Display text={text} />
        </>
    )
}