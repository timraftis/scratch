(function(){

  var quotes = [
    "Bless up.",
    "They don't want us to win.",
    "We the best.",
    "They don't want us to eat.",
    "Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast.",
    "Celebrate success right, the only way, apple.",
    "You smart, you loyal, you a genius.",
    "Hammock talk come soon.",
    "Give thanks to the most high.",
    "Congratulations, you played yourself.",
    "Don't ever play yourself.",
    "The key to more success is to have a lot of pillows.",
    "The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.",
    "Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there.",
    "It's on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean.",
    "How's business? Boomin.",
    "They never said winning was easy. Some people can't handle success, I can.",
    "They will try to close the door on you, just open it.",
    "We don't see them, we will never see them.",
    "Every chance I get, I water the plants, Lion!",
    "In life there will be road blocks but we will over come it.",
    "To succeed you must believe. When you believe, you will succeed.",
    "Life is what you make it, so let's make it.",
    "To be successful you've got to work hard, to make history, simple, you've got to make it.",
    "A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm.",
    "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started.",
    "You see that bamboo behind me though, you see that bamboo? Ain't nothin' like bamboo. Bless up.",
    "In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key.",
    "Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel.",
    "Find peace, life is like a water fall, you've gotta flow.",
    "Let's see what Chef Dee got that they don't want us to eat.",
    "Lion!",
    "Surround yourself with angels.",
    "Major key, don't fall for the trap, stay focused. It's the ones closest to you that want to see you fail.",
    "The key to more success is to get a massage once a week, very important, major key, cloth talk.",
    "The key to success is to keep your head above the water, never give up.",
    "It's important to use cocoa butter. It's the key to more success, why not live smooth? Why live rough?",
    "They key is to have every key, the key to open every door.",
    "Learning is cool, but knowing is better, and I know the key to success.",
    "You do know, you do know that they don't want you to have lunch. I'm keeping it real with you, so what you going do is have lunch.",
    "Stay focused.",
    ];

  var images = [
    "image1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "&mdash; " +  'DJ Khaled' + " &mdash;";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();
