import React from 'react';
import Memes from './Memes';
import MemeEditor from './MemeEditor'


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
