/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navBarElement;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

/**
* @description Function called when the document is loaded 
* @param {Event} event - The event associated with the event listener
*/
function buildMenuFunction(event) {
    navBarElement = document.getElementById('navbar__list');
    const containers = document.getElementsByClassName('landing__container');
    const fragment = document.createDocumentFragment();
    for (container of containers){
        const liNewElement = document.createElement('li');
        const aNewElement = document.createElement('a');
        const section = container.parentElement;

        aNewElement.classList.toggle('menu__link');
        aNewElement.textContent = section.getAttribute('data-nav');
        aNewElement.setAttribute('href', `#${section.id}`);

        liNewElement.appendChild(aNewElement);
        fragment.appendChild(liNewElement);
    }
    navBarElement.appendChild(fragment);
}

// Scroll to section on link click

//DOMContentLoaded event
document.addEventListener('DOMContentLoaded', buildMenuFunction(event));


