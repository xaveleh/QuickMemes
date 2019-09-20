import React from 'react';
import styled from 'styled-components';

const UrlOutputSpan = styled.span`
background: hsl(204, 14%, 50%);
border: 1px solid white;
font-family:Arial;
`;


function UrlOutput ({url}) {
    return <UrlOutputSpan url={url}>{url || "Your shareable meme URL will appear here!"}</UrlOutputSpan>
}

export default UrlOutput;