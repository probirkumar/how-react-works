import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '3px solid blue', margin: '5px'}}>
            <h3>This is Dial</h3>
            <p>Steps fo far: {props.steps}</p>
        </div>
    );
};

export default Dial;