import React, {useEffect, useState} from 'react';
import Navbar from "components/navbar/Navbar";
import News from "components/news/News";
import {useHistory} from "react-router-dom";
import {dataFetch} from "utils/dataFetch";
import List from "components/list/List";

const Comments = () => {
    const history = useHistory();
    const newsId = history.location.pathname.split('/')[2];
    const [commentList, setCommentList] = useState(null);

    useEffect(() => {
        dataFetch(`/item/${newsId}`)
            .then((result) => {
                setCommentList(result.kids);
            });
    }, []);

    return (
        <>
            <Navbar />
            <News item={newsId}/>
            {
                commentList?.map(comment => <List item={comment} key={comment} />)
            }
        </>
    );
};

export default Comments;
