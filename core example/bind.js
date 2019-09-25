//The bind() method creates a new function that, when called, has its this keyword set to the provided
// value, with a given sequence of arguments preceding any provided when the new function is called.

var pokemon = {
    firstname: 'Mijanur',
    lastname: 'Rahaman ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); 

logPokemon('sushi', 'algorithms'); 