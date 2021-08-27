export const calculateTime = (publishTime) => {
    if(!publishTime){
        return '-'
    }
    const differenceSeconds = Math.ceil(Date.now() / 1000 - publishTime);
    const differenceMinutes = Math.floor(differenceSeconds / 60);
    const differenceHours = Math.floor(differenceSeconds / 3600);
    const differenceDays = Math.floor(differenceHours / 24);

    if(differenceDays > 0)
        return `${differenceDays} day${differenceDays > 1 ? "s" : ""} ago`
    if(differenceHours > 0)
        return `${differenceHours} hour${differenceHours > 1 ? "s" : ""} ago`

    return `${differenceMinutes} minute${differenceMinutes > 1 ? "s" : ""} ago`
};