'use strict';

function add(numbers_param) {
    let result = 0;
    for (let num of numbers_param) {
        result = result + num;
    }
    return result;
}

function multi(numbers_param) {
    let result = 1;
    for (let num of numbers_param) {
        result = result * num;
    }
    return result;
}

module.exports = {
    add: add,
    multi: multi
};