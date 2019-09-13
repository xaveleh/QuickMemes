import React from 'react';
import _ from 'lodash';
import {MemeContext} from "./MemeContext"
import MemeEditor from './MemeEditor';
import styled from 'styled-components';

const StyledDiv = styled.main`
    font-family: georgia;
    display: grid;
    grid-template-columns: 1fr;
    background: rgba(57, 50, 118, 0.5);
    text-align: center;
    height: 100%;
    grid-row-gap: 1em;
`;

const getMemesPath = 'https://api.imgflip.com/get_memes';

function reduceMemesArray(memeMap, currentMeme) {
    const nextMemeMap = memeMap;
    const memeId = currentMeme.id;
    nextMemeMap[memeId] = currentMeme;
    return nextMemeMap;
}

const initialState = {
    memesMap: {},
    memeId: -1,
    memeUrl: '',
    textArray: [],
    inputs: [],
}

function reducer(state, action) {
    return { ...state, ...action };
}

function Memes({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const {memesMap} = state;
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
                dispatch({
                    memesMap: {...memeArray.reduce(reduceMemesArray, memesMap)},
                });
            }).catch((error) => {
                console.log('Caught error getting memes', error);
            });
        }
    }, [memesMap]);
    console.log('render', state)
    return (
        <StyledDiv> 
            <MemeContext.Provider value={{...state, dispatch}}>
                <MemeEditor />
            </MemeContext.Provider>
        </StyledDiv>
    );
    }



export default Memes;
