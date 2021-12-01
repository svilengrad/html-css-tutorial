let e = {
    keyCode: 1000,
    which: true
};
// e.which = e.which == true || e.which != undefined
// let key = e.which == true ? e.keyCode : e.which;

let key;
if(e.which == true) {
    key = e.keyCode;
} else {
    key = e.which;
}
console.log(key);