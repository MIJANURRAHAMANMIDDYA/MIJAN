const access=require('../utility/deckofcard');
class deckofcard
{
   constructor()
   {
    this.player1 = new Array(9);
    this.player2 = new Array(9);
    this.player3 = new Array(9);
    this.player4 = new Array(9);
   }
   Display(deck)
    {
     console.log("before shuffle:\n" + deck);
    }
    Shufflecard(deck)
     {
        let i = 1;
        while (i <= 52) 
        {
            let card1 = Math.floor((Math.random() * 52) + 1);
            let card2 = Math.floor((Math.random() * 52) + 1);
            let temp = deck[card1];
            deck[card1] = deck[card2];
            deck[card2] = temp;
            i++;
        }

        console.log("after shuffle:\n"+deck);
    }
    Givencardtoplayer(deck)
     {  
        let indext1 = 0;
        let indext2 = 0;
        let indext3 = 0;
        let indext4 = 0;
        let deckindext = 0;
        for (let i = 0; i < 9; i++) {
            if (indext1 !== 9 && indext2 !== 9 && indext3 !== 9 && indext4 !== 9 && deckindext < 36) {
               this. player1[indext1++] = deck[deckindext++];
               this.player2[indext2++] = deck[deckindext++];
               this.player3[indext3++] = deck[deckindext++];
               this.player4[indext4++] = deck[deckindext++];
            }
        }
        console.log("player1 cards are:\n" + this.player1);
        console.log("player2 cards are:\n" +this.player2);
        console.log("player3 cards are:\n" +this.player3);
        console.log("player4 cards are:\n" +this.player4);
    }
}
let obj=new deckofcard();
let deck = ['C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-10', 'C-jack', 'C-queen', 'C-king', 'C-ace',
'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-10', 'D-jack', 'D-queen', 'D-king', 'D-ace',
'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-10', 'H-jack', 'H-queen', 'H-king', 'H-ace',
'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-10', 'S-jack', 'S-queen', 'S-king', 'S-ace'];
obj.Display(deck);
obj.Shufflecard(deck);
obj.Givencardtoplayer(deck);