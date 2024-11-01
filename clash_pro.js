
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

document.addEventListener('keyup', handlekeyup);
function handlekeyup(event) {
    const byplayerpressed = event.key;
    console.log(byplayerpressed);
    const expectedvalue = document.getElementById('display-word').innerText.toLowerCase();
    if (expectedvalue == byplayerpressed) {
        console.log('correct', byplayerpressed, expectedvalue);
        play();
        removebackground(expectedvalue);

    } else {
        console.log('incorrect', byplayerpressed, expectedvalue)
        play();
    }


}