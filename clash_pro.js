
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

    play()
    removebackground('a b c d e f g h i j k l m n  o p q r s t u v w x y z /');

}