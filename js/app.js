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
//Allow to have all the names linking to the CSS stylesheet in only one place on the code
const navBarId='navbar__list'; 
const sectionsTagType = 'section'; 
const classSelectorMenuItem = 'menu__link'; 
const sectionKeyAttribute = 'data-nav'; 
const activeMenuLinkclass = 'active_menu__link';
const activeSectionClass = 'your-active-class';

//Intersection observer to detect section on scroll
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }
const observer = new IntersectionObserver(intersectionObserverCallback, options);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
* @description Function called need to toggle the visualized sections items
* @param {String} key - The section key of the visualized section
*/
function toggleActiveSection(key) {
    toggleActiveElementType(key,sectionKeyAttribute,sectionsTagType,activeSectionClass);
    toggleActiveElementType(key,sectionKeyAttribute,`.${classSelectorMenuItem}`,activeMenuLinkclass);
}

  /**
* @description Function called need to toggle a type of elements by a type of attribute equal to a key for a given CSS class
* @param {String} keyValue - The section key of the visualized section
* @param {String} keyName - The attribute name for the key
* @param {String} selector - The selector of type of elements
* @param {String} activeClass - The active class on the CSS stylesheet
*/
function toggleActiveElementType(keyValue,keyName,selector,activeClass) {
    const elements = document.querySelectorAll(selector);

    for(element of elements){
        if(element.getAttribute(keyName) == keyValue){
            element.classList.add(activeClass);
        }else{
            element.classList.remove(activeClass)
        }
    }
  }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//NavBar item click delegate
/**
* @description Function called when there is a click in a NavBar element
* @param {Event} event - The event associated with the event listener
*/
function clickNavBarItemDelegate(event) {
  const sectionKey = event.target.getAttribute(sectionKeyAttribute);
  toggleActiveSection(sectionKey);
}

// build the nav
/**
* @description Function called when the document is loaded 
* @param {Event} event - The event associated with the event listener
*/
function buildMenuFunction(event) {
    const sections = document.getElementsByTagName(sectionsTagType);
    const fragment = document.createDocumentFragment();
    let navBarElement = document.getElementById(navBarId);
    for (section of sections){
        const liNewElement = document.createElement('li');
        const aNewElement = document.createElement('a');
        
        aNewElement.classList.toggle(classSelectorMenuItem);
        aNewElement.textContent = section.getAttribute(sectionKeyAttribute);
        aNewElement.setAttribute('href', `#${section.id}`);
        aNewElement.setAttribute(sectionKeyAttribute,section.getAttribute(sectionKeyAttribute));

        liNewElement.appendChild(aNewElement);
        fragment.appendChild(liNewElement);
        observer.observe(section);
    }
    navBarElement.appendChild(fragment);
    navBarElement.addEventListener('click',clickNavBarItemDelegate,true);
}


// Add class 'active' to section when near top of viewport
/**
* @description Function called when the document is loaded 
* @param {List IntersectionObserverEntry} entries - The list of entries found in the viewport
* @param {IntersectionObserver} observer - The observer doing the job of tracking the sections
*/
function intersectionObserverCallback(entries, observer){
    const isIntersecting = entries[0].isIntersecting;
    if(isIntersecting){
        const sectionKey = entries[0].target.getAttribute(sectionKeyAttribute);
        toggleActiveSection(sectionKey);
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/
//DOMContentLoaded event
document.addEventListener('DOMContentLoaded', buildMenuFunction);


