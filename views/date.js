exports.getDate = function(){
    
    const today = new Date();
    const option = {
        weekday : "long",
        day : "2-digit",
        month : "long"
    };

    return today.toLocaleDateString("en-HK", option);
};

exports.getDay = function(){
    const today = new Date();
    const option = {
        weekday : "long"
    };

    return today.toLocaleDateString("en-HK", option);
};
