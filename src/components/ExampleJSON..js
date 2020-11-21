import React, { useRef, useState } from 'react';
import example from '../exampleJson.json';
import Button from 'react-bootstrap/Button';

function ExampleJSON() {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = e => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return (
        <div>
            <h4>Example JSON Format</h4>
            {
                document.queryCommandSupported('copy') &&
                <div>
                    <Button 
                        variant="primary"
                        onClick={copyToClipboard}
                    >
                        Copy
                    </Button> 
                    {copySuccess}
                </div>
            }
            <textarea 
                ref={textAreaRef} 
                rows="30" 
                cols="35"
            >
                {JSON.stringify(example, null, ' ') }
            </textarea>
        </div>
    )
}

export default ExampleJSON;