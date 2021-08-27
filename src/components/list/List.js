import React, {useEffect, useState} from 'react';
import './list.css';
import {dataFetch} from "../../utils/dataFetch";

const List = React.memo(({item}) => {
    const [details, setDetails] = useState(null);
    useEffect(() => {
        dataFetch(`/item/${item}`)
            .then((result) => {
                console.log(result);
                setDetails(result);
            });
    }, []);
    return (
        !details?.deleted &&
        <div className="list">
            <div className="list-header">
                <div className="font-subtitle-small">{details?.by}</div>
                <div className="font-subtitle-small">8 hours ago</div>
            </div>
            <div className="list-item font-title-small" dangerouslySetInnerHTML={{__html: details?.text}} />
            {
                details?.kids &&
                details.kids.map(item => <List item={item} key={item} />)
            }
        </div>
    );
});

export default List;
