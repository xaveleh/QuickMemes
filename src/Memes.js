import React from 'react';
import _ from 'lodash';
import {MemeContext} from "./MemeContext"
import styled from "styled-components";

const Toolbar = styled.div`
font-family: georgia;
display: grid;
grid-template-columns: 1fr 1fr;
background: rgba(0, 44, 44, 0.5);
`;


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
    const [memeId, setMemeId] = React.useState(-1);
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
                    <option>*Pick A Meme*</option>
                    {_.map(memesMap, mapOption)}
                </select>
                Select a meme!
                {children}
            </MemeContext.Provider>
        </Toolbar>);
    }



export default Memes;




