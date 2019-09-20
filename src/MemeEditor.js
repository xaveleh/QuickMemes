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
font-family:Arial;
`;

const MemeSubmit = styled.button`
-moz-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	-webkit-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #768d87), color-stop(1, #6c7c7c));
	background:-moz-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-webkit-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-o-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-ms-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#768d87', endColorstr='#6c7c7c',GradientType=0);
	background-color:#768d87;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:1px solid #566963;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
    text-shadow:0px -1px 0px #2b665e;
:hover{
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #6c7c7c), color-stop(1, #768d87));
	background:-moz-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-webkit-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-o-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-ms-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c7c7c', endColorstr='#768d87',GradientType=0);
	background-color:#6c7c7c;
}
`;

const Toolbar = styled.form`
background: hsl(204, 14%, 50%);
border: 1px solid white;
`;

function makeMemeQuery(array) {
    return _.map(array, formatMemeArray).join('&');
}

function formatMemeArray(value, index) {
    return `boxes[${index}][text]=${value.text}`
}

function MemeEditor() {
    const {memeId, memesMap, memeUrl, dispatch, inputs} = React.useContext(MemeContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(inputs.some(value => !!value)) {
        const submittedText = _.reduce(inputs, (acc, value) => {
            acc.push({ text: value });
            return acc;
        }, []);
            const MemeTemplatePath =`https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image?template_id=${memeId}&${makeMemeQuery(submittedText)}&username=IvyDoyle&password=mypassword`;
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
            });
    }};

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
