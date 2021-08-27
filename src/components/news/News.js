import React, {useState, useEffect} from 'react';
import './news.css';
import {dataFetch} from "../../utils/dataFetch";

const News = React.memo(({item}) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        dataFetch(`/item/${item}`)
            .then((result) => {
                setDetails(result);
            });
    }, []);

    const generateUrl = () => {
        const url = details?.url?.split('/');
        return url ? url[2] : '';
    }

    return (
        <>
            <div className="news">
                <div className="news-title">
                    <div className="font-title-small">1. </div>
                    <div className="font-title-medium">{details?.title}</div>
                    <a className="font-title-small" href={details?.url}>{`(${generateUrl()})`}</a>
                </div>
                <div className="news-subtitle">
                    <div className="font-subtitle-small">{details?.score} points</div>
                    <a className="font-subtitle-small" href="https://test.com">by {details?.by}</a>
                    <a className="font-subtitle-small" href="https://test.com">8 hours ago</a>
                    <a className="font-subtitle-small" href="https://test.com">{details?.descendants} comments</a>
                </div>
            </div>
        </>
    );
});

export default News;
