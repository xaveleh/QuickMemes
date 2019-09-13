import React from 'react';
import styled from 'styled-components';
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

const ShareButtonsSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
`;

function ShareButtons({ url }) {
    return (
        <ShareButtonsSection>
            <RedditShareButton url={url}><RedditIcon/></RedditShareButton>
            <FacebookShareButton url={url}><FacebookIcon/></FacebookShareButton>
            <TwitterShareButton url={url}><TwitterIcon/></TwitterShareButton>
            <TumblrShareButton url={url}><TumblrIcon/></TumblrShareButton>
            <EmailShareButton url={url}><EmailIcon/></EmailShareButton>
        </ShareButtonsSection>
    );
}
export default ShareButtons