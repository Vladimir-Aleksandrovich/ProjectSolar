function count1() {
  let count = 0;

    return function() {
        count++;
       return count;
    }
}
let num = count1();
console.log(num())
console.log(num())
console.log(num())