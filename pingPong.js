const input = process.argv[2];

const pingAndPong = input.split(", ");
console.log(pingAndPong);

let pings = 0;
let pongs = 0;

for (let i = 0; i < pingAndPong.length; i++) {
  if (pingAndPong[i] == "ping") {
    pings++;
  } else if (pingAndPong[i] == "pong") {
    pongs++;
  }
}

console.log("Match result ping vs pong: " + pings + "-" + pongs);
