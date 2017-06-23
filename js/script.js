$(document).ready(function() {

  // Einstein's JS
  var audio = new Audio('audio/sounds.wav');

  $('#einstein').mouseenter(function() {
    audio.play();
  }).mouseleave(function(){
    audio.pause();
  });
  
  // Aziz's JS
  var azizAudio = new Audio('http://imslp.nl/imglnks/usimg/3/31/IMSLP77612-PMLP01796-Beethoven-Op61m2mbco.mp3');

  $('#aziz').mouseenter(function() {
    azizAudio.play();
  }).mouseleave(function(){
    azizAudio.pause();
  });
// Student 1's JS must fit in lines 13-18







// Student 2's JS must fit in lines 21-26

});
