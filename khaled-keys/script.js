(function(){

  var quotes = [
    "Bless up.",
    "They don't want us to win.",
    "We the best.",
    "Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast.",
    "Celebrate success right, the only way, apple.",
    "You smart, you loyal, you a genius.",
    ];

  var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "&mdash; " +  'Tim Raftis' + " &mdash;";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();
