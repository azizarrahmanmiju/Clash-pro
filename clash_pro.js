
function play() {
    hidecontainer('home-Screen');
    showcontainer('playground');
    const number = generaterandomalphabet();
    document.getElementById('display-word').innerText = number;


}

function hidecontainer(id) {
    document.getElementById(id).classList.add('hidden');
}
function showcontainer(id) {
    document.getElementById(id).classList.remove('hidden');
}

function generaterandomalphabet() {
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const singlealphabet = alphabetstring.split('');
    const randomnuber = Math.random() * 25;
    const index = Math.round(randomnuber);
    const alphabet = alphabetstring[index];
    return alphabet;



}