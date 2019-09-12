import React, {Fragment} from 'react';
import {MemeContext} from "./MemeContext";
import _ from "lodash";
import styled from "styled-components";

const MemeCanvas = styled.img`
object-fit: contain;
width: 50vw;
height: 60vh;
text-align: center;
margin: 3em;
border: 1px solid black;
`;
const MemeTextInput = styled.label`
display: block;
margin: 1em;
`;

function makeMemeQuery(array) {
    return _.map(array, formatMemeArray).join('&');
}

function formatMemeArray(value, index) {
    return `boxes[${index}][text]=${value.text}`
}

function MemeEditor() {
    const {memeId, setMemeId, memesMap} = React.useContext(MemeContext);
    const [textArray, setTextArray] = React.useState([]);
    const [memeUrl, setMemeUrl] = React.useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const submittedText = _.reduce(evt.target, (acc, target) => {
            if(target.type === "text") {
             acc.push({text: target.value}) 
            }
        return acc
    }, []);
        setTextArray(submittedText);
    }

    React.useEffect(() => {
        if(textArray.some(value => !!value)) {
            const MemeTemplatePath = `https://api.imgflip.com/caption_image?template_id=${memeId}&${makeMemeQuery(textArray)}&username=IvyDoyle&password=mypassword`;
            fetch(MemeTemplatePath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                } 
            }).then((response) => {
                return response.json();
            }).then((json) => {
                setMemeUrl(json.data.url);
                console.log('response for memeeditor', json);
            })
        }
    }, [memeId, textArray, makeMemeQuery]);
    console.log('memeUrl', memeUrl);
    const memeMetaData = _.get(memesMap, memeId, {"box_count": 0, "memeId": ""})
    const inputArray = [];
    for (let i = 0; i < memeMetaData.box_count; i++) {
        inputArray.push(<MemeTextInput><input key={i} placeholder={`Text box ${i+1}`} type="text"></input></MemeTextInput>);
    }
    return (
    <Fragment>
        <form onSubmit = { handleSubmit }>
        {inputArray}
            <MemeTextInput>
                <input type="submit" value="Submit"/>
            </MemeTextInput>
        </form>
        <MemeCanvas src={memeUrl || memeMetaData.url} alt="Edited meme goes here!"/>
    </Fragment>);
}

export default MemeEditor;