function mirror(str) {
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  console.log(`${str}${str1}`);
}
mirror("Utkarsh");
// let str = "Hello";
// let reversed = str.split('').reverse().join('');
// console.log(str+reversed); // Output: "olleH"
