

// console.log('настя'[0].toUpperCase());

// let name = "настя";
// console.log(name[0]); // н

// console.log(name[0].toUpperCase()); //Н

// const newName = name[0].toUpperCase() + name.slice(1);
// console.log(newName);

// const newName = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(newName);
// let name = '';
// const newName = name.charAt(0).toUpperCase() + name.slice(1);

// console.log(newName);

const newName = () => {
    let name = "настя";
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(newName);
}

newName();
let name = '';
newName();

// let newStr = str[0].toUpperCase() + str.slice(1);


// const name = "настя";
// console.log(name[0].toUpperCase());
// const nameUpper = name.toUpperCase();  // "Настя"


let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  
  console.log (getRandomIntInclusive(1, 100));


//   function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );

// alert ('main' / 'sub');


// let str = "розы такие розы"; 
// str = str.replace("розы","красивые");

// console.log(str);

const x="Солнце";

console.log("The string length is " + x.length);

const originalText = "ВелоСипед";
const upperText = originalText.toUpperCase();

console.log(upperText);

// let str = "розы такие розы"; 
// str.replace("розы","красивые");

// console.log(str);

// const str = "abcdefghij";

// console.log("(2,3): " + str.substring(2, 5));

const str = "Яблоко, Банан, Киви";
const res = str.substring(8, 13); 
console.log(res); // "Банан"