const textarea = document.querySelector('textarea')
const counter = document.querySelector('.counter')

//create a new function that should match with onkeyup event 
function count(){
    const text = textarea.value;
    const length = text.length
    counter.innerText = `${length}`
}