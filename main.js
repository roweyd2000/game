

 const words=["cat","dog","mouse","peace","poop","hello","bombe","tunisia","kiss","lol","boss","car","france","japan","table","poker","pc","eyes","card","money","monkey","plane","music","water"]

var word=""


 



 function randomnumber(min, max)
 {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function getrandomword(){
 var i=randomnumber(0,words.length-1)
 return words[i]
 }

 function getValue() {
    return document.getElementById("guess1").value;
   
   }

   
// function chrono(){
//     var h1 = document.getElementsByTagName('h1')[0];
//     var start = document.getElementById('ply');
//     var reset = document.getElementById('res');
//    var sec = 0;
//    var min = 0;
//    var hrs = 0;
//    var t;
  
//    function tick(){
//        sec++;
//        if (sec >= 60) {
//            sec = 0;
//            min++;
//            if (min >= 60) {
//                min = 0;
//                hrs++;
//            }
//        }
//    }
//    function add() {
//        tick();
//        h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
//                 + ":" + (min > 9 ? min : "0" + min)
//                    + ":" + (sec > 9 ? sec : "0" + sec);
//        timer();
//    }
//    function timer() {
//        t = setTimeout(add, 1000);
//    }
  

//    start.onclick = timer();
   
//     reset.onclick = function() {
//         h1.textContent = "00:00:00";
//         sec = 0; min = 0; hrs = 0;
    
//     }
// }




function play(){
    word=getrandomword();

   $ ("#kaka").append($('<p class=pi'+' The word has '+word.length+' characters '+'</p>'))
   // chrono();
 }  


 function restart(){ 
    count=0;      
    word="";
    $("#kaka").empty() ; 
    $("#his").empty() ; 
    $("#win3").empty();
    $("#win2").empty();
    $ ("#hintp").empty();
    
    $("#win4").empty();
    $("#word1").empty();
    word=getrandomword();
   
    $ ("#word1").append($('<p class="pi">'+' The word has '+word.length+' characters '+'</p>'))
   ;
    
   // chrono();

}


var count=0
 function try1(){
    count++;
    var correct=0;var found=0;var wrong=0;
    var guess=getValue();
if(word===guess){
    $("#win").append($('<p id="win2">'+' YOU WON '+'</p>'));
    $("#his").empty() ; 
    $("#word1").empty() ; 
    $("#hintp").empty();
    $("#hint").empty();
    
    if(count===1){
$("#win").append($('<p id="win3">'+' in the first try '+'</p>'));}
    else {$("#win").append($('<p id="win4">'+' in '+count+' tries '+'</p>'));}}
else{
 for(var i=0;i<word.length;i++){
    if(guess[i]===word[i]){correct++;}
    else if(word.indexOf(guess[i])!== -1){found++;}
    else {wrong++;}
}
$("#his").append($('<p>'+count+' try '+':'+ guess+'<br></br>' +' correct : '+correct+'/ '+'    found but not in place : '+found+' / '+'     wrong : '+wrong+'</p>'))
}
 }


 function hint(){
   $ ("#hintp").empty();
   var i=randomnumber(0,word.length-1);
   $ ("#hintp").append($('<p class="hint">'+' The word contains '+word[i].toUpperCase()+'</p>'));
 }













