import React from 'react';
import Memes from './Memes';
import MemeEditor from './MemeEditor'
import './App.css';

function App() {
    return (
        <React.StrictMode>
            <header />
                <Memes>
                    <MemeEditor />
                </Memes>
            <footer />
        </React.StrictMode>
    );
}

export default App;
