// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const arrnames = [];

function writeCards(names) {
    let i = 0;
    while (i < names.length) {
        arrnames[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return arrnames;
}



function countDown(num) {
    while (num>= 0) {
        console.log(num);
        num--;
    }
}
 
























