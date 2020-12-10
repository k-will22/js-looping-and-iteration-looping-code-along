// Code your solutions in this file


function writeCards(name, surprise) {
    let arr = []
    for (let i = 0; i < name.length; i++) {
        arr.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`)
    }
    return arr
}

let count = 10 
function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}
