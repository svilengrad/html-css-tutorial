let e = {
    keyCode: 1000,
    which: false
};
// e.which = e.which == true || e.which != undefined
let key = e.which == true && e.keyCode == 1000 ? e.which : e.keyCode;

// let key;
// if(e.which == true) {
//     key = e.which;
// } else {
//     key = e.keyCode;
// }
console.log(key);