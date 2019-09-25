module.exports = {
    display() {
            
        let deck = ['C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-10', 'C-jack', 'C-queen', 'C-king', 'C-ace',
            'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-10', 'D-jack', 'D-queen', 'D-king', 'D-ace',
            'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-10', 'H-jack', 'H-queen', 'H-king', 'H-ace',
            'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-10', 'S-jack', 'S-queen', 'S-king', 'S-ace'];
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
        function givencardtoplayer(deck, player1, player2, player3, player4) {  // indext for four players
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
        let player11 = [];
        while (player1.length > 0) {
            player11.push(player1.splice(0, 3));
        }
        console.log(player11);
        let player22 = [];
        while (player2.length > 0) {
            player22.push(player2.splice(0, 3));
        }
        console.log(player22);
        let player33 = [];
        while (player3.length > 0) {
            player33.push(player3.splice(0, 3));
        }
        console.log(player33);
        let player44 = [];
        while (player4.length > 0) {
            player44.push(player4.splice(0, 3));
        }
        console.log(player44);
    }
}
