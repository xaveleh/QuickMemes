import React from 'react';
import styled from 'styled-components';

import cx from 'classnames';
import { Component } from 'react';

export default const Component = () => {
        const [likes, setLikes] = React.useState();
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
                <button onClick={() =>setLikes(likes + 1)} className="like-button">Like{likes}</button>
                <button className="dislike-button">Dislike{dislikes}</button>
            </>
        );
    }
