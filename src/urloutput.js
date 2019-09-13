import React from 'react';
import styled from 'styled-components';

const UrlOutputSpan = styled.span`
background: rgba(131, 126, 127, 0.5);
border: 1px solid black;
font-family: georgia;
`;


function UrlOutput ({url}) {
    return <UrlOutputSpan url={url}>{url || "Your shareable meme URL will appear here!"}</UrlOutputSpan>
}

export default UrlOutput;