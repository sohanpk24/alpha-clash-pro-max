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

function ahandleKeyboardKeyUpEvent(event){
    const playerPressed = event.key
    
    //key player is expected to press
    const currentAlaphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlaphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point')

        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);




        //---------------------------------------------
        //updeted score
        //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        

        //2.increase the score by 1
        // const newScore = currentScore +1

        // //3>show the update score 
        // currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }else{
        console.log('you missed the life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);




        // -----------------------------------------
        // //1.get the current Life number
        // const currentLineElement = document.getElementById('current-life');
        // const currentLifeText = currentLineElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //2.reduce the life count
        // const newLife = currentLife -1;

        // //3. display the updated life count
        // currentLineElement.innerText = newLife;
    }
}
//capture keyborad key press
document.addEventListener('keyup', ahandleKeyboardKeyUpEvent)


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