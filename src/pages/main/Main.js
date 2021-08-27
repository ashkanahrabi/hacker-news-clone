import React, {useState, useEffect} from 'react';
import Navbar from "components/navbar/Navbar";
import News from "../../components/news/News";
import {dataFetch} from "../../utils/dataFetch";

const Main = () => {
    const [newsList, setNewsList] = useState(null);
    useEffect(() => {
        dataFetch('/topstories')
            .then((result) => {
                setNewsList(result.splice(0,29));
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
