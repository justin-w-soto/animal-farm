//cat
const catSounds = document.getElementById('cat-sounds');
const catImage = document.getElementById('cat-image');
catImage.addEventListener('click', () => {
    catSounds.play();
});



//dog
const dogSounds = document.getElementById('dog-sounds');
const dogImage = document.getElementById('dog-image');
dogImage.addEventListener('click', () => {
    dogSounds.play();
});


//horse
const horseSounds = document.getElementById("horse-sounds");
const horseImage = document.getElementById('horse-image');
horseImage.addEventListener('click', () => {
    horseSounds.play();
});

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
