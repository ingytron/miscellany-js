function pyramid() {
	counter = 0;
	hashtastic = '#';
	roomForAnother = '#';
	while (counter <= 7) {
	    console.log(roomForAnother);
    	roomForAnother = roomForAnother.concat(hashtastic);
	    counter++;
	}
}

pyramid();