console.log("Hello World!");
const sport = "Basketball";
let team = "Sky";
let jersey = 88;
let hasWonChampionship = false;
let stadiumLocation = null;
let nextGame;
console.log(team, jersey, hasWonChampionship, stadiumLocation, nextGame)
let player = {
  name: "Kahleah Copper",
  position: "Guard",
  pointsPerGame: 18.7
};
console.log(player.name); // Kahleah Copper
player.pointsPerGame = 19.2;
console.log(player.pointsPerGame); // 19.2
player.isStarter = true
player.numOfGames = 19
console.log(player);

let favFoods = ["Popcorn", "Pizza", "Skittles", "Cereal"];
console.log(favFoods);
favFoods.push("fortnite", "candy");
favFoods[2] = "Waffles";
favFoods.pop();
favFoods.length;
console.log(favFoods);

function rateSong(songName, rating) {
    if (rating === 5) {
        console.log(songName + " is by far the best song!");
    } else if (rating === 3,4) {
        console.log(songName + " is good, but not the best.");
    } else if (rating <= 2) {
        console.log(songName + " is definitely not the best.");
    }
};

let mySongs = ["Fortnite Theme", "Monkey Spinning Monkeys", "Seven Nation Army"]

for (let i = 0; i < mySongs.length; i++) {
    console.log(mySongs[i]);
}

rateSong(mySongs[0], 5);
rateSong(mySongs[1], 4);