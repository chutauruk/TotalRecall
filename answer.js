////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++);{
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i+=2);{
    console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`FizzBuzz`)
    } else if(i % 5 == 0){
        console.log(`Buzz`)
    } else(i % 3 == 0){
        console.log(`Fizz`)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

1. plantee[2]++;
console.log(plantee)
2.wolfy[3]="Gotham City";
console.log(wolfy)
3.dart[3] ="Upside Down, Hawkins";
console.log(dart)
4.wolfy[0]="Gameboy";
console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles["Donatello", "Leonardo","Raphael", "Michaelangelo"];
for(let i of ninjaTurtles){
    i=i.toUpperCase();
    console.log(i)
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);

console.log(favMovies.indexOf("Titanic"));

1. console.log(favMovies.sort()
2. console.log(favMovies.pop())
3. console.log(favMovies.push("Guardians of the Galaxy"))
4. console.log(favMovies.reverse())
5. console.log(favMovies.shift())
6. console.log(favMovies.unshift())
7. 
const index = favMovies.indexOf('django unchained');
favMovies.splice(3,1, "Avatar")
if (index !== -1) {
    favMovies[index] = 'avatar';
}
 console.log(favMovies);

 //console.log(favMovies.findIndex(e =>  e === "Django Unchained"))

//  for (let i = 0; i < favMovies.length; i++) {
//     if (favMovies[i] == 'Django Unchained') {
//         favMovies.splice();
//         favMovies[i] = "Avatar";}

// console.log(favMovies.indexOf("Django Unchained"));
// favMovies.splice(15, 0, "Avatar" );

//favMovies.splice(14, 1, "Avatar")


8.function sliceMiddle(favMovies) {
    console.log(favMovies.length)
    console.log(favMovies.slice((favMovies.length - 1) / 2, favMovies.length / 2 + 1));
  }

sliceMiddle()

console.log(favMovies.slice(9,18)); //No, this will not permanently alter the array, since it's only through console.log
const sliceMiddle = (favMovies.slice(1,9));
console.log(sliceMiddle);
console.log(favMovies[18]);
9. console.log(sliceMiddle());
10. console.log(favMovies[18]);
11. ?
12.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

//neff to no one
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

//Where is waldo
console.log(whereIsWaldo[2][1][1]);
////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i=1; i < 21;i++){ 
    if (i%2 === 0){
        let randomNumber = Math.floor(Math.random()*3)
        if(randomNumber===0){console.log("...human...why you taking pictures of me?...")} 
        if(randomNumber===1){console.log("...the catnip made me do it...")}
        if(randomNumber===2){console.log("...why does the red dot always get away...")} 
    } else{
       console.log("Love me, pet me!HSSSSS");      
}
} 

// let kittenTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// for (let i = 1; i<21; i++){
//     i%2 === 0 ? console.log(kittenTalk[Math.floor(Math.random()*kittenTalk.length)]) : console.log("Love me, pet me!HSSSSS");
// }

////////////////////////////////
//  Find the Median
////////////////////////////////
