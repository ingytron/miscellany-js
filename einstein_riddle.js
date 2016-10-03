

console.log("No owners have the same pet, smoke the same brand of cigar, or drink the same beverage.");


/*	Other facts:

    The Brit lives in the red house.
    The Swede keeps dogs as pets.
    The Dane drinks tea.
    The green house is on the immediate left of the white house.
    The green house’s owner drinks coffee.
    The owner who smokes Pall Mall rears birds.
    The owner of the yellow house smokes Dunhill.
    The owner living in the center house drinks milk.
    The Norwegian lives in the first house.
    The owner who smokes Blends lives next to the one who keeps cats.
    The owner who keeps the horse lives next to the one who smokes Dunhill.
    The owner who smokes Bluemasters drinks beer.
    The German smokes Prince.
    The Norwegian lives next to the blue house.
    The owner who smokes Blends lives next to the one who drinks water.*/

var Norwegian = {"house": 'yellow';
			// Does not drink milk, not in centre house
			"pet": "cats",
			"drinks": 'water',
			"smokes": "Dunhill";}

var Dane = {"house": "blue";
			'pet': "horses"; 		
			"drink": "tea",
			'smokes': "Blends";}

var Brit = {"house": "red", 
			'pet': "birds"; 
			"drinks": "milk",
			'smokes': "Pall Mall";
};

var German = {"house": "green";
			'pet': ""; 		
			"drink": "coffee",
			'smokes': "Prince";}

var Swede = {"house": "white",
			'pet': "dog",
			"drinks": "beer",
			'smokes': "Bluemasters"
			};


console.log("The question is: who owns the fish?");

