import React, { useRef, useState } from 'react';
import example from '../exampleJson.json';

function ExampleJSON() {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = e => {
        console.log(textAreaRef)
        console.log(textAreaRef.current)
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return (
        <div>
            <h4>Example Menu and Order JSON Format</h4>
            {
                document.queryCommandSupported('copy') &&
                <div>
                    <button onClick={copyToClipboard}>Copy</button> 
                    {copySuccess}
                </div>
            }
            <textarea 
                ref={textAreaRef} 
                rows="30" 
                cols="50"
            >
                {JSON.stringify(example, null, ' ') }
            </textarea>
        </div>
    )
}

export default ExampleJSON;