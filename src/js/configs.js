


let functions = require('./functions')

var cssnext = require('postcss-preset-env');

var postfuncs = require('postcss-functions');

var precss = require('precss');

var colorfunction = require('postcss-color-function');

var calc = require('postcss-calc');


module.exports = function(context){
    let {options} = context;
    let plugins = [
        precss,
        calc,
        colorfunction,
        // postfuncs({
        //     functions
        // }),
        cssnext({
            browsers: 'last 2 versions, ie >=11, Firefox >= 27, safari >= 9',
            grid: "autoplace"
        })
    ]

    return { plugins, };
}