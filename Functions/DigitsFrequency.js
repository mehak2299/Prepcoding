const nos = 12345552;
const d = 2;
let count = 0;
console.log("One")
for (let i = nos; i != 0; i=Math.floor(i/10)) {
    rem = i % 10;
    if (rem == d) {
        count++;
    }
}
console.log(count)