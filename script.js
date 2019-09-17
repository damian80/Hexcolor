// lets create an array
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// lets target and elements we are going to need it
const hex = document.querySelector('.hex');
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
// lets create 'eventListener' for 'button' and function
hexBtn.addEventListener('click', getHex);
// lets call function and create variables and for loop
function getHex() {
    let hexCol="#";
    for (let i=0; i<6;i++){
    let random=Math.floor(Math.random()*hexNumbers.length);
    hexCol +=hexNumbers[random];
    }
    bodyBcg.style.backgroundColor= hexCol;
    hex.innerHTML=hexCol;
}
