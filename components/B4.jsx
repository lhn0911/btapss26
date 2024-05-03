import React from 'react';

const ColorBox = ({ color }) => {
    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: color,
                margin: '10px',
                display: 'inline-block'
            }}
        ></div>
    );
}

const App = () => {
    return (
        <div>
            <ColorBox color="red" />
            <ColorBox color="blue" />
            <ColorBox color="green" />
        </div>
    );
}

export default App;
