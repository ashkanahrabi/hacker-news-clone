import React, {useState, useEffect} from 'react';
import './news.css';
import {dataFetch} from "../../utils/dataFetch";
import {Link} from "react-router-dom";
import {calculateTime} from "../../utils/calculateTime";

const News = React.memo(({item, index}) => {
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
                    {
                        index &&
                            <div className="font-title-small">{index}. </div>
                    }
                    <div className="font-title-medium">{details?.title}</div>
                    <a className="font-title-small" href={details?.url}>{`(${generateUrl()})`}</a>
                </div>
                <div className="news-subtitle">
                    <div className="font-subtitle-small">{details?.score} points</div>

                    <Link to={`/item/${item}`} >
                        <span className="font-subtitle-small" href="https://test.com">by {details?.by}</span>
                    </Link>

                    <Link to={`/item/${item}`} >
                        <span className="font-subtitle-small" href="https://test.com">{calculateTime(details?.time)}</span>
                    </Link>

                    <Link to={`/item/${item}`} >
                        <span className="font-subtitle-small">{details?.descendants} comments</span>
                    </Link>
                </div>
            </div>
        </>
    );
});

export default News;
