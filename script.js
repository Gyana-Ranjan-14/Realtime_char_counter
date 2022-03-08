// variables
const charval = document.getElementById("textarea");
let totalcount = document.getElementById("total_counter");
let remaincount = document.getElementById("remaining_counter");

let userchar = 0;
const updatecounter = () => {
    // whatever length you get add it to the user char
    userchar = charval.value.length;

    // total count
    totalcount.innerText = userchar;
    remaincount.innerText = 150 - userchar;

}

charval.addEventListener('keyup', () => updatecounter()); //used for count char
//we use it because whenever we want to enter a key or something when the key will release it will be show (keyup is the best to use)


// copy the text 
const copytext = () => {
    charval.select(); //this function will select the text
    charval.setSelectionRange(0, 9999); //mobile main select 
    navigator.clipboard.writeText(charval.value); //this will copy the text
}