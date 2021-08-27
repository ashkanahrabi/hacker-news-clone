import React, {useState, useEffect} from 'react';
import Navbar from "components/navbar/Navbar";
import News from "../../components/news/News";
import {dataFetch} from "../../utils/dataFetch";
import {useHistory} from "react-router-dom";
import Button from "../../components/button/Button";

const Main = () => {
    const history = useHistory();
    const pageNumber = Number(history.location.pathname.split('/')[1]) || 1;
    const [newsList, setNewsList] = useState(null);

    useEffect(() => {
        //TODO: Add loading on api calls
        dataFetch('/topstories')
            .then((result) => {
                setNewsList(result.splice((pageNumber - 1) * 30 ,30));
            });
    }, [history.location.pathname]);

    const incrementPage = () => {
        history.push(`${pageNumber + 1}`)
    }

    return (
        <>
            <Navbar />
            {
                newsList?.map((item, index) => <News item={item} index={(pageNumber - 1) * 30 + index + 1} key={item}/>)
            }
            <div className="main-button-wrapper">
                <Button title={'More'} onClick={incrementPage}/>
            </div>
        </>
    );
};

export default Main;
