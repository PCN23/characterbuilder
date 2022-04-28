// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;
// set state for all of the character's catchphrases
let catchphrase = [];

headDropdown.addEventListener('change', () => {
    console.log('changing select', headDropdown.value);
    //headDropdown.style.backgroundImage = `url('./assets/${headDropdown.value}.png')`;
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    console.log('changing select', middleDropdown.value);
    middle++;
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`; 
    displayStats();   
});


bottomDropdown.addEventListener('change', () => {
    console.log('changing select', bottomDropdown.value);
    bottom++;
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    const newCatchphrase = catchphraseInput.value;
    catchphrase.push(newCatchphrase);
    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the ${head.value} times, the ${middle.value} times and the ${bottom} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {
        const  = document.createElement('p');
        p.classList.add ('catchphrase');
        p.textContent = catchphrases;

        catchphrasesEl.append(p);
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}