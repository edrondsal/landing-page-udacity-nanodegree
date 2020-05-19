# Landing Page Project

## Table of Contents

* [Strategy](#Strategy)
* [Creation Navbar](#Navbar)
* [Intersection Observer](#Observer)
* [Event Listener](#ClickEvent)

## Strategy

The strategy is tostart with the creation of the navbar when DOMContentLoaded event is done with a loop through all the Section selector.
The navbar item will have a link to the section to scroll automatically when link clicked
An event listener will be added to the navbar but getting the event.target in order to kwno which element is clicked to change the style of the navbar when clicked 
The sections will be tracked by an IntersectionObserver to know when visible in the viewport


## Navbar

The navbar is created by getting all elements by tag type defined by a global variable.
For each section a menu item is created with a link to the section to allow automatic scroll

## Observer

An intersection observer is defined as global variable with a callback that will then lock if intersection is detected to toggle the active section

## ClickEvent

An event listener is added to the navbar in order to get the click in the menu items to also toggle the active section