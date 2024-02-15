// function play(){
//     //hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your alphabet:', alphabet)

    //set randomly generated alphabet to the screen;
    const currentAlaphabetElement = document.getElementById('current-alphabet');
    currentAlaphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet)

}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}