const alphabet = [
  "A","B",
  "C","D",
  "E","F",
  "G","H",
  "I","J",
  "K","L",
  "M","N",
  "O","P",
  "Q","R",
  "S","T",
  "U","V",
  "W","X",
  "Y","Z",];

   
/* random letter from alphabet*/ 
let letter =0;
function giveMeRandomLetter (){
  const randomIndexOfAlphabet= Math.floor(Math.random()*(alphabet.length))
   letter = alphabet[randomIndexOfAlphabet].toLowerCase();
  return letter;
 
}
//console.log(giveMeRandomLetter())

/*we need these*/
var win= 0;
var loss =0;
var left9 =9;



/*Letters which we pressed*/
 const pressedKeys=[];
  let guess=document.querySelector("#guess");
  let wins=document.querySelector("#wins");
  let losses=document.querySelector("#loose");
  let left =document.querySelector("#left9");

  
  
 giveMeRandomLetter();

  window.addEventListener("keyup",function(e){ 
  const pressedKey=e.key;
  pressedKeys.push(pressedKey);
  guess.innerHTML=`Your Guesses so far: ${pressedKeys.join(",")}`;
 // console.log(typeof pressedKeys)

      
  /*Let`s begin*/
      /*win*/ 
  if(letter==pressedKey){win++;
  wins.innerHTML=`Wins: ${win}`}
    else {left9--;
      left.innerHTML=`Guesses Left: ${left9}`};

      /*loss*/      
  if(left9 == 0 ){
  loss++;
  losses.innerHTML=`Losses: ${loss}`;

      /*when game is end restart  automatically*/
      giveMeRandomLetter();
     pressedKeys.length=0;
      left9=9;
      left9.innerHTML=`Guesses Left: ${left9}`;
      guess.innerHTML=`Your Guesses so far:`;
     
    }
   
    
  })