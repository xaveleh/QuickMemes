import React, {Fragment} from 'react';
import {MemeContext} from "./MemeContext";
import _ from "lodash";
import styled from "styled-components";
import {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    TumblrShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    RedditIcon,
    TumblrIcon,
    EmailIcon
  } from 'react-share';

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
const MemeTextInput = styled.label`
display: block;
margin: 0.5em;
`;

const MemeSubmit = styled.input`
font-family: georgia;
border: solid 1px black;
`;

const UrlOutput = styled.span`
background: white;
border: 1px solid black;
font-family: georgia;
`;

const ShareButtons = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-evenly;
`;

function makeMemeQuery(array) {
    return _.map(array, formatMemeArray).join('&');
}

function formatMemeArray(value, index) {
    return `boxes[${index}][text]=${value.text}`
}

function MemeEditor() {
    const {memeId, memesMap} = React.useContext(MemeContext);
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
    }, [memeId, textArray]);
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
                    <MemeSubmit type="submit" value="Submit"/>
                </MemeTextInput>
            </form>
            <MemeCanvas src={memeUrl || memeMetaData.url} alt="Edited meme goes here!"/>
            <UrlOutput>{memeUrl || "Your shareable meme URL will appear here!"}</UrlOutput>
            <ShareButtons>
                <RedditShareButton url={memeUrl}><RedditIcon/></RedditShareButton>
                <FacebookShareButton url={memeUrl}><FacebookIcon/></FacebookShareButton>
                <TwitterShareButton url={memeUrl}><TwitterIcon/></TwitterShareButton>
                <TumblrShareButton url={memeUrl}><TumblrIcon/></TumblrShareButton>
                <EmailShareButton url={memeUrl}><EmailIcon/></EmailShareButton>
            </ShareButtons>
        </Fragment>
    );
}

export default MemeEditor;