/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// practicing of classlist

document.querySelector('h1').classList
document.querySelector('h1').classList.add('new_class')
document.querySelector('h1').classList.remove('backpack_name')
document.querySelector('h1').classList.replace('backpack_name','new_backpack')


// practicing of attributes
document.querySelector('img').attributes
document.querySelector('img').hasAttribute('src')
// return true
document.querySelector('img').getAttribute('src')
// return src url
document.querySelector('img').setAttribute("alt","this is first img")
// add the title attributes
document.querySelector('img').removeAttribute("alt")


// inline style
document.querySelector('h1').style
document.querySelector('h1').style.backgroundColor = "red";
document.querySelector('h1').style.color = "black";