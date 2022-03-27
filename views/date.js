module.exports = getDate;

function getDate(){
    let today = new Date();
    let day = "";
    let option = {
        weekday : "long",
        day : "2-digit",
        month : "long"
    };

    day = today.toLocaleDateString("en-HK", option);
    return day;
}