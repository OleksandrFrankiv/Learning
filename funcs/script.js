`use strict`;

const a = (proto, funcname) => Object.defineProperty(proto, funcname, { enumerable: false })


String.prototype.myCharAt = function (index) {
    a.call(String, this);
    const str = this;
    if (index == undefined) index = 0;
    return str[index];
};

Array.prototype.myJoin = function (separator) {
    if (this.length == 0) return '';
    if (separator == undefined) separator = ',';
    let string = this[0];
    for (let i = 1; i < this.length; i++) {
        string += separator + this[i];
    }
    return string;
};

String.prototype.myConcat = function () {
    a.call(String, this);
    let sentence = this;
    for (let i = 0; i < arguments.length; i++) {
        sentence += arguments[i];
    }
    return sentence;
};

String.prototype.myEndsWith = function (searchString, neededLength) {
    if (neededLength === undefined) neededLength = this.length;
    let j = 0;
    for (let i = neededLength - searchString.length; i <= neededLength; i++) {
        if (this[i] === searchString[j]) {
            j++;
            if (i === neededLength - 1) return true
        } else return false
    }
};

String.prototype.myIncludes = function (searchString, position) {
    if (position === undefined) position = 0;
    let j = 0, abss = new String;
    for (let i = position; i <= this.length; i++) {
        if (this[i] !== searchString[j]) {
            continue
        }
        else if (this[i] === searchString[j]) {
            j++;
            abss += this[i]
            if (searchString === abss) return true
            continue
        }
        else return false
    }
};



