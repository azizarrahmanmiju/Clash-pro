
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

function generaterandomalphabet() {
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const singlealphabet = alphabetstring.split('');
    const randomnuber = Math.random() * 25;
    const index = Math.round(randomnuber);
    const alphabet = alphabetstring[index];
    return alphabet;



}