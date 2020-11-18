import React from 'react';
import example from '../menuAndOrder.json';

function ExampleJSON() {
    return (
        <>
            <h2>Example Menu and Order JSON Format</h2>
            <pre>{JSON.stringify(example, null, ' ') }</pre>
        </>
    )
}

export default ExampleJSON;