document.getElementById('valentineButton').addEventListener('click', function() {
  document.getElementById('valentinePopup').style.display = 'block';
});

let desperationLevel = 0;
const desperateResponses = [
  "WRONG ANS LOL TRY AGAIN",
  "GRRRR STOP SAYING NO",
  "WHY NOT",
  "IM GNA GET ANGRY IM TELLING U",
  "GRRRRRR DONT MAKE ME ANGRY",
  "OKAY I WAS JOKING IM SAD NOW PLEASE JUST SAY YES",
  "OK THATS ENOUGH SAY YES NOW",
];

function handleResponse(response) {
  document.getElementById('valentinePopup').style.display = 'none';

  // Process the response
  let finalMessage;
  if (response === 'yes') {
    finalMessage = "hehehe YAY okay dinners at 7.30pm ill pick you up at your place at 6.30pm :))) YAY SEE U";
  } else {
    // Use desperate responses and increment desperationLevel
    finalMessage = desperateResponses[desperationLevel];
    desperationLevel = Math.min(desperationLevel + 1, desperateResponses.length - 1);
  }

  // Display the final message
  alert(finalMessage);
}