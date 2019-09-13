import React from 'react';
import styled from 'styled-components';
import { MemeContext } from './MemeContext';
import _ from 'lodash';

const MemeTextInput = styled.label`
    display: block;
    margin: 0.5em;
`;

function MemeText({ index }) {
    const { dispatch, inputs } = React.useContext(MemeContext);
    const handleChange = React.useCallback((evt) => {
        dispatch({ inputs: [...inputs.slice(0, index), evt.target.value, ...inputs.slice(index + 1)]})
    }, [index, dispatch, inputs]);
    return (
        <MemeTextInput>
            <input placeholder={`Text box ${index + 1}`} type="text" onChange={handleChange} value={inputs[index]} />
        </MemeTextInput>
    );
}

export default MemeText;