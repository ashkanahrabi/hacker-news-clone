import React from 'react';
import './news.css';

const News = () => {
    return (
        <>
            <div className="news">
                <div className="news-title">
                    <div className="font-title-small">1. </div>
                    <div className="font-title-medium"> Test title </div>
                    <a className="font-title-small" href="https://test.com">test.com</a>
                </div>
                <div className="news-subtitle">
                    <div className="font-subtitle-small">6 points</div>
                    <a className="font-subtitle-small" href="https://test.com">by tomte</a>
                    <a className="font-subtitle-small" href="https://test.com">8 hours ago</a>
                    <a className="font-subtitle-small" href="https://test.com">0 comments</a>
                </div>
            </div>
        </>
    );
};

export default News;
