import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    authDomain: "hacker-news.firebaseio.com",
    databaseURL: "https://hacker-news.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export const dataFetch = (url) => {
    return new Promise((resolve, reject) => {
        get(ref(getDatabase(), `v0${url}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    resolve(snapshot.val());
                } else {
                    console.log("No data available");
                    reject();
                }
            })
            .catch((error) => {
                console.error(error);
                reject();
            });
    })
}