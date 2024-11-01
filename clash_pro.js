
score = 0;
life = 5;

function play() {
    hidecontainer('home-Screen');
    showcontainer('playground');
    const number = generaterandomalphabet();
    const elementId = document.getElementById('display-word');
    elementId.innerText = number;

    setbackgroundcolor(number);
}

function hidecontainer(id) {
    document.getElementById(id).classList.add('hidden');
}
function showcontainer(id) {
    document.getElementById(id).classList.remove('hidden');
}

function setbackgroundcolor(elementid) {
    const component = document.getElementById(elementid);
    component.classList.add('bg-orange-400');

}
function removebackground(elementid) {
    const component = document.getElementById(elementid);
    component.classList.remove('bg-orange-400');

}

function getcurrentvaluebyid(elementid) {
    const element = document.getElementById(elementid);
    const value = element.innerText;
    return value;

}

function generaterandomalphabet() {
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const singlealphabet = alphabetstring.split('');
    const randomnuber = Math.random() * 25;
    const index = Math.round(randomnuber);
    const alphabet = alphabetstring[index];
    return alphabet;
}
function setelemebtbyid(id, value) {
    mainscore = document.getElementById(id);
    mainscore.innerText = value;
}

document.addEventListener('keyup', handlekeyup);
function handlekeyup(event) {
    const byplayerpressed = event.key;
    console.log(byplayerpressed);
    const expectedvalue = document.getElementById('display-word').innerText.toLowerCase();


    if (expectedvalue == byplayerpressed) {
        console.log('correct', byplayerpressed, expectedvalue);
        play();
        removebackground(expectedvalue);
        score++;
        setelemebtbyid('current-score', score);
        console.log(score)
        return;
    }

    console.log('incorrect', byplayerpressed, expectedvalue);
    play();
    life--;
    // lifeDiplay.innerText = life;
    setelemebtbyid('current-life', life);
    console.log(life);

    setelemebtbyid('current-life', life);
    if (life <= 0) {
        // alert('Game Over');
        hidecontainer('playground');
        showcontainer('scoresec');
        setelemebtbyid('totalscore', score);
        return;
    }

}




function restart() {
    score = 0;
    life = 5;
    setelemebtbyid('current-life', life);
    setelemebtbyid('current-score', score);
    const value = getcurrentvaluebyid('display-word');
    removebackground(value);

    removeAllBackgrounds();
    play();


}


function removeAllBackgrounds() {
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of alphabetstring) {
        const element = document.getElementById(letter);
        if (element) {
            element.classList.remove('bg-orange-400');
        }
    }
}