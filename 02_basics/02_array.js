const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // this will add the other array as subarray of first one

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    // this will merge 2 arrays properly but here we can merge only two arrays at once
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // this is spread operation ... , you can merge any number of arrays

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)    // will convert n-D array into 1-D Array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))    // will return whether the input is array or not
console.log(Array.from("Hitesh"))    // will convert it to array
console.log(Array.from({name: "hitesh"})) // will provide blank output , as we need to specify that we have to convert key or the value into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));