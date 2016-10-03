// This is a work in progress

$( document ).ready(function() {
	generate();

  function generate(){
  	var vonbon = {age: 2, 
      name: "Vonbonne"};
    var wibby = {age: 4, name: "Wibby"};
    // Obviously these need to be changed quite a lot. 
    var quotes = {quote: "There are two types of people in this world, the ones that know binary, and those who don\'t",
    author: "Unknown"},
    {quote: "Mallow? I try it!",
    from: vonbon,
    context: "Her first campfire marshmallow. She hadn't heard of it but was still game to try."}, 
    {quote: "The trouble with my hair is, that whenever I wake up, it's a different person!",
    from: wibby,
    context: "Explaining how her hair looks like her friend's big sister's hair because of the way it had curled."}
  };
    
    
		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
  
$(".button").on( "click", function() {
    generate();
});  
  
});



// Okay the quotes are going to be kid quotes.
// Should also pair with a random image for kicks