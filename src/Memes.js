import React from 'react';
import _ from 'lodash';
import {MemeContext} from "./MemeContext"
import styled from "styled-components";

const Toolbar = styled.div`
background: rgba(255, 179, 44, 0.1);
font-family: georgia;
`

const getMemesPath = 'https://api.imgflip.com/get_memes';

function reduceMemesArray(memeMap, currentMeme) {
    const nextMemeMap = memeMap;
    const memeId = currentMeme.id;
    nextMemeMap[memeId] = currentMeme;
    return nextMemeMap;
}

function mapOption(currentMeme, memeId, memeMap) {
    return <option value = {memeId} key={memeId}>{currentMeme.name}</option>;
}

function Memes({ children }) {
    const [memesMap, setMemesMap] = React.useState({});
    const [memeId, setMemeId] = React.useState('');
    React.useEffect(() => {
        if(_.size(memesMap) === 0) {
            console.log('true')
            fetch(getMemesPath, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((json) => {
                console.log('Response', json);
                const memeArray = json.data.memes;
               setMemesMap({...memeArray.reduce(reduceMemesArray, memesMap)});
            }).catch((error) => {
                console.log('Caught error getting memes', error);
            });
        }
    }, [memesMap]);
    console.log('render', memesMap)
    return (
        <Toolbar> 
            <MemeContext.Provider value={{memeId, setMemeId, memesMap}}>
                <select onChange = {(evt) => setMemeId(evt.target.value)}>
                    {_.map(memesMap, mapOption)}
                </select>
                Select your meme, input some text, then submit to see the result!
                {children}
            </MemeContext.Provider>
        </Toolbar>);
    }



export default Memes;




