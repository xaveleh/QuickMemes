import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { MemeContext } from './MemeContext';

const MemeSelector = styled.select`
    max-width: 300px;
    font-family: georgia;
    max-height: 20px;
`;

function mapOption(currentMeme, memeId) {
    return <option value = {memeId} key={memeId}>{currentMeme.name}</option>;
}

function MemeSelect() {
    const { dispatch, memesMap } = React.useContext(MemeContext);
    return (
        <MemeSelector
            onChange = {(evt) => {
                dispatch({
                    memeUrl: '',
                    textArray: [], 
                    memeId: evt.target.value, 
                    inputs: _.fill(Array(memesMap[evt.target.value].box_count), '')
                });
            }}
        >
            <option>*Pick A Meme*</option>
            {_.map(memesMap, mapOption)}
        </MemeSelector>
    );
}

export default MemeSelect;
