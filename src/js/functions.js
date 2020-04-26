settextcolor = function (color){
    if (get-color(color, lightness)<40){
        return '#fff';
    } else{
        return '#000';
    }    
};

module.exports = {
    settextcolor,
};