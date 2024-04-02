import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect( () => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{border: '3px solid red', margin: '20px'}}>
            <h2>This is My Smart Watch</h2>
            <h3>My CUrrent Steps: {steps}</h3>
            <button onClick={increaseSteps}>Increase Steps</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;