import React from 'react';
import {MemeContext} from "./MemeContext";
import _ from "lodash";
import styled from "styled-components";

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background: rgba(0, 44, 44, 0.5);
`;

const MemeCanvas = styled.img`
object-fit: contain;
width: 50vw;
height: 60vh;
text-align: center;
margin: 3em;
border: 1px solid black;
`;

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
            const MemeTemplatePath = `https://api.imgflip.com/caption_image?template_id=${memeId}&boxes[]=${JSON.stringify(textArray)}&username=IvyDoyle&password=mypassword`;
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
    }, [memeId, textArray]);
    console.log('memeUrl', memeUrl);
    const inputArray = [];
    for (let i = 0; i <= 3; i++) {
        inputArray.push(<input key={i} placeholder={`Text box ${i}`} type="text"></input>);
    }
    return (
    <Wrapper>
        <form onSubmit = { handleSubmit }>
        {inputArray}
            <label>
                <input type="submit" value="Submit"/>
            </label>
        </form>
        <MemeCanvas src={memeUrl || _.get(memesMap, `${memeId}.url`)} alt="edited meme"/>
    </Wrapper>);
}

export default MemeEditor;