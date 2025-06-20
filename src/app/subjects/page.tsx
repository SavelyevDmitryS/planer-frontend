'use client'

import { useEffect, useState } from "react";

export default function Subjects() {
    const [text, setText] = useState('')
    useEffect(() => {
        fetch("https://savelyevdmitrys-planer-backend-e91e.twc1.net/api/subjects")
            .then(res => res.text())
            .then(resText => setText(resText))
    })

    return (
        <div>
            Subjects Page!
            {text ? (
                <div>
                    {text}
                </div>
            ) : null}
        </div>
        
    );
}