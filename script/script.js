const inventors = [
    {first: 'Albert' , last: 'Einstein', year: 1879, passed : 1955},
    {first: 'Isaak' , last: 'Newton', year:1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year:1564, passed: 1642},
    {first: 'Marie' , last: 'Curie', year:1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year:1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year:1473, passed: 1543},
    {first: 'Max'   , last: 'Planck', year:1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year:1898, passed: 1979},
    {first: 'Ada'   , last: 'Lovelace', year:1815, passed: 1852},
    {first: 'Sarah E'  , last: 'Goode', year:1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year:1829, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year:1828, passed: 1909}
];
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// show inventors Array in HTMl
const showListOfInventors = function (inventorsToShow,targetElement) {
    let html = ''
    for (const inventor of inventorsToShow) {
        let htmlElement = `<div>
        <p>
            <span>first & last: ${inventor.first}</span>
            <span>${inventor.last}</span>
            <span class="born">Born: </span><span>${inventor.year}</span>
            <span class="die">Die:</span><span> ${inventor.passed}</span>
        </p>
        </div>`
        html += htmlElement
    }
    // document.querySelector('.inventors').innerHTML = html;
    targetElement.innerHTML = html;
}

window.onload = function () {
    showListOfInventors(inventors,document.querySelector('.inventors'))
}





/** button born in 1500 */
const bornButton = document.querySelector('.js-born');
const fifteenCentury = document.querySelector('.birthdayFifteenCentury')

// Array.prototype.filter()
let fifteen = function (inventor) {
    return inventor.year >= 1500 && inventor.year < 1600; 
}

let bornInFifteenCentury= inventors.filter(fifteen);


bornButton.addEventListener("click", () => {
    showListOfInventors(bornInFifteenCentury, fifteenCentury);
    // clear the result after 5 seconds
    setTimeout(() => {
        fifteenCentury.innerHTML = '';
    }, 5000);
});
/**----------------------------------------------------------------------- */




/** button first & last name of inventors */
// Function to show a list of names
const showListOfNames = function (namesToShow, targetElement) {
    let html = ''
    for (const name of namesToShow) {
        let htmlElement = `<div>
        <p>${name}</p>
        </div>`;
        html += htmlElement;
    }
    targetElement.innerHTML = html;

    // clear the result after 5 seconds
    setTimeout(() => {
        targetElement.innerHTML = '';
    }, 5000);
}
const fullNameBtton = document.querySelector('.js-fullName');
const showFullNames = document.querySelector('.show-fulll-names');
fullNameBtton.addEventListener("click", () =>{
    showListOfNames(fullNames, showFullNames);
})


// Array.prototype.map()
let callBackFullNames = function (inventor) {
    return `${inventor.first} ${inventor.last}`;
}
const fullNames = inventors.map(callBackFullNames);
/*----------------------------------------------------------------------*/
