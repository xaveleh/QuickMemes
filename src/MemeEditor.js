import React, {Fragment} from 'react';
import {MemeContext} from "./MemeContext";
import _ from "lodash";
import styled from "styled-components";
import ShareButtons from './sharebuttons';
import UrlOutput from  './urloutput';
import MemeSelect from './memeselect';
import MemeText from './memetext';

const MemeCanvas = styled.img`
object-fit: contain;
width: 50vw;
height: 60vh;
text-align: center;
padding: 1em;
box-sizing: border-box;
width: 100%
image-border: solid 1px black;
font-family: georgia;
`;

const MemeSubmit = styled.button`
font-family: georgia;
border: solid 1px black;
`;

const Toolbar = styled.form`
background: rgba(13, 8, 59, 0.75);
`;

function makeMemeQuery(array) {
    return _.map(array, formatMemeArray).join('&');
}

function formatMemeArray(value, index) {
    return `boxes[${index}][text]=${value.text}`
}

function MemeEditor() {
    const {memeId, memesMap, memeUrl, dispatch, textArray, inputs} = React.useContext(MemeContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const submittedText = _.reduce(inputs, (acc, value) => {
            acc.push({ text: value });
            return acc;
        }, []);
        dispatch({ textArray: [...submittedText] });
    };


    React.useEffect(() => {
        if(textArray.some(value => !!value)) {
            const MemeTemplatePath =`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image?template_id=${memeId}&${makeMemeQuery(textArray)}&username=IvyDoyle&password=mypassword`;
            fetch(MemeTemplatePath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                } 
            }).then((response) => {
                return response.json();
            }).then((json) => {
                dispatch({ memeUrl: json.data.url });
                console.log('response for memeeditor', json);
            })
        }
    }, [memeId, textArray, dispatch]);
    const memeMetaData = _.get(memesMap, memeId, {"box_count": 0, "memeId": ""})
    const inputArray = [];
    for (let i = 0; i < memeMetaData.box_count; i++) {
        inputArray.push(<MemeText key={i} index={i} />);
    }
    return (
        <Fragment>
            <Toolbar onSubmit={handleSubmit}>
                <MemeSelect />
                {inputArray}
                <MemeSubmit type="submit">Submit</MemeSubmit>
            </Toolbar>
            <MemeCanvas src={memeUrl || memeMetaData.url} alt="Edited meme goes here!"/>
            <UrlOutput url={memeUrl} />
            <ShareButtons url={memeUrl} />
        </Fragment>
    );
}

export default MemeEditor;
