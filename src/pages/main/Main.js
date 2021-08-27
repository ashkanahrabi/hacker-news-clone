import React, {useState, useEffect} from 'react';
import Navbar from "components/navbar/Navbar";
import News from "../../components/news/News";
import {dataFetch} from "../../utils/dataFetch";
import {useHistory} from "react-router-dom";

const Main = () => {
    const history = useHistory();
    const pageNumber = history.location.pathname || 1;

    const [newsList, setNewsList] = useState(null);
    useEffect(() => {
        dataFetch('/topstories')
            .then((result) => {
                setNewsList(result.splice((pageNumber - 1) * 30 ,(pageNumber - 1) * 30 + 29));
            });
    }, []);
    return (
        <>
            <Navbar />
            {
                newsList?.map(item => <News item={item} key={item}/>)
            }
        </>
    );
};

export default Main;
