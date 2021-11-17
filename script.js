/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "They say hunger is the best spice.",
    source: "Spike Spiegel", 
    episodeNum: 26, 
    episodeName: "The Real Folk Blues, Part II", 
    timeStamp: '10:25'
  }, 
  {
    quote: "Whatever happens, happens.",
    source: "Spike Spiegel", 
    episodeNum: 19, 
    episodeName: "Wild Horses", 
    timeStamp: '22:00'
  }, 
  {
    quote:  "I'm not going there to die. I'm going to find out if I'm really alive."
    ,
    source: "Spike Spiegel", 
    episodeNum: 26, 
    episodeName: "The Real Folk Blues, Part II", 
    timeStamp: '10:25'
  }, 
  {
    quote: "Don't you want to hang out and waste your life with us?"
    ,
    source: "Spike Spiegel", 
    episodeNum: 0, 
    episodeName: "Knockin On Heaven's Door", 
    timeStamp: '10:25'
  }, 
  {
    quote: "Angels banished from heaven have no choice but to become devils."
    ,
    source: "Vicious", 
    episodeNum: 5, 
    episodeName: "Ballad Of Fallen Angels ", 
    timeStamp: '15:20'
  }, 
  {
    quote: "When we show fear, it jumps at us faster than light. But, if we do not show fear, it casts its eye upon us gently and then guides us into infinity."
    ,
    source: "Laughing Bull", 
    episodeNum: 26, 
    episodeName: "The Real Folk Blues, Part II", 
    timeStamp: '10:25'
  }, 
  {
    quote: "You know the first rule of combat? Shoot them before they shoot you." 
    ,
    source: "Faye Valentine", 
    episodeNum: 26, 
    episodeName: "Honky Tonk Women", 
    timeStamp: '2:30'
  }, 
  {
    quote: "Men always seem to think about their past before they die, as though they were frantically searching for proof that they truly lived.",
    source: "Jet Black", 
    episodeNum: 26, 
    episodeName: "The Real Folk Blues, Part II", 
    timeStamp: '10:25'
  }, 
  {
    quote: "Why don’t we drink to me and my reflection in your lovely eyes?"
    ,
    source: "Andy Von De Oniyate", 
    episodeNum: 22, 
    episodeName: "The Real Folk Blues, Part II", 
    timeStamp: '15:23'
  }, 
  {
    quote: "Where are you? Are you here Mr. spooky space creature?",
    source: "Radical Edward", 
    episodeNum: 11, 
    episodeName: "Toys In The Attic", 
    timeStamp: '18:15'
  }, 
  {
    quote: "High socks are coo-ool. Gotta wear 'em outside!", 
    source: "Radical Edward", 
    episodeNum: 17, 
    episodeName: "Mushroom Samba", 
    timeStamp: '5:30'
  }, 
  {
    quote: "I think I know. I don't think I know. I don't think I think I know. I don't think I think.",
    source: "Radical Edward", 
    episodeNum: 26, 
    episodeName: "Brain Scratch", 
    timeStamp: '12:32'
  }, 
  {
    quote: "Woof",
    source: "Ein", 
    episodeNum: 2, 
    episodeName: "Stray Dog Strut", 
    timeStamp: '4:34'
  }, 
  

];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);