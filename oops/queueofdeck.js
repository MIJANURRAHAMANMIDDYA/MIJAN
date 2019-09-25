const Queue=require('../utility/queuelink');
let queue1 = new Queue();  
let queue2 =new Queue();
let queue3 = new Queue();
let queue4 = new Queue();

let deck =
    ['C-02', 'C-03', 'C-04', 'C-05', 'C-06', 'C-07', 'C-08', 'C-09', 'C-10', 'C-jack', 'C-queen', 'C-kong', 'C-ace',
        'D-02', 'D-03', 'D-04', 'D-05', 'D-06', 'D-07', 'D-08', 'D-09', 'D-10', 'D-jack', 'D-queen', 'D-kong', 'D-ace',
        'H-02', 'H-03', 'H-04', 'H-05', 'H-06', 'H-07', 'H-08', 'H-09', 'H-10', 'H-jack', 'H-queen', 'H-kong', 'H-ace',
        'S-02', 'S-03', 'S-04', 'S-05', 'S-06', 'S-07', 'S-08', 'S-09', 'S-10', 'S-jack', 'S-queen', 'S-kong', 'S-ace'];
console.log("before shuffle:\n" + deck);
let player1 = new Array(9);
let player2 = new Array(9);
let player3 = new Array(9);
let player4 = new Array(9);
function shufflecard(deck) {
    let i = 1;
    while (i <= 52) {
        let card1 = Math.floor((Math.random() * 52) + 1);
        let card2 = Math.floor((Math.random() * 52) + 1);
        let temp = deck[card1];
        deck[card1] = deck[card2];
        deck[card2] = temp;
        i++;
    }
    return deck;
}
function givencardtoplayer(deck, player1, player2, player3, player4) { 
     // indext for four players
    let indext1 = 0;
    let indext2 = 0;
    let indext3 = 0;
    let indext4 = 0;
    let deckindext = 0;
    for (let i = 0; i < 9; i++) {
        if (indext1 !== 9 && indext2 !== 9 && indext3 !== 9 && indext4 !== 9 && deckindext < 36) {
            player1[indext1++] = deck[deckindext++];
            player2[indext2++] = deck[deckindext++];
            player3[indext3++] = deck[deckindext++];
            player4[indext4++] = deck[deckindext++];
        }
    }
    console.log("player1 cards are:\n" + player1);
    console.log("player2 cards are:\n" + player2);
    console.log("player3 cards are:\n" + player3);
    console.log("player4 cards are:\n" + player4);
}
console.log("aftershuffle:\n" + shufflecard(deck));
givencardtoplayer(deck, player1, player2, player3, player4);
player1 = player1.sort();
player2 = player2.sort();
player3 = player3.sort();
player4 = player4.sort();
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
queue1.enqueue("player1");
for(let i=0;i<player1.length;i++)
{
    queue1.enqueue(player1[i]);
}
console.log(queue1);
queue2.enqueue("player2");
for(let i=0;i<player2.length;i++)
{
    queue2.enqueue(player2[i]);
}
console.log(queue2);
queue3.enqueue("player3");
for(let i=0;i<player3.length;i++)
{
    queue3.enqueue(player3[i]);
}
console.log(queue3);
queue4.enqueue("player4");
for(let i=0;i<player4.length;i++)
{
    queue4.enqueue(player4[i]);
}
console.log(queue4);