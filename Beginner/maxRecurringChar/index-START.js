/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


/*
SOURCE: https://zellwk.com/blog/looping-through-js-objects/
Once in a while, you may need to loop through Objects in JavaScript. The only way to do so before ES6 is with a for...in loop.

The problem with a for...in loop is that it iterates through properties in the Prototype chain. When you loop through an object with the for...in loop, you need to check if the property belongs to the object. You can do this with hasOwnProperty.
*/

// reference string: 'aabacada'

function maxRecurringChar(text) {
    // charMap initalized as empty object
    let charMap = {}
    // holds value of max occuring characters starting at 0
    let maxCharValue = 0
    // will store letter that holds the highest occurences
    let maxChar = ''

    // iterate though allc characters (properties) of text
    for (let char of text) {
        // checks if char is a property of charMap
        if (charMap.hasOwnProperty(char)) {
            //  if so: increment value by 1.
            charMap[char]++
        } else {
            // if not, character is a property of charMap with value set to one
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}


/*
converting object into an array

A better way to loop through objects
The better way to loop through objects is first to convert the object into an array. Then, you loop through the array.

You can convert an object into an array with three methods:

reference string: 'aabacada'
Object.keys - contains the properties of an object ['a', 'b', 'c']
Object.values- stores the values of properties of obj in an array [5, 1, 1]
Object.entries - contains an array of arrays: inner array holds the property/value pairs
[
    [a: 5],
    [ b: 1],
    [c: 1]
]

*/
const maxRecurringChar = text => {
    let charMap = {}
    let charArray = [] // ['a', 'b', 'c', 'd']
    // holds the all characters in the text in an array
    let vaulesArray = [] // [4,3,2,1]
    // holds the value of reocurring characters initalized at 0
    let maxCharValue = 0

    // iterate though every character of text 'string'
    for (let char of text) {
        // check to see if character is a property of charMap
        if (charMap.hasOwnProperty(char)) {
            // if so: increase character by 1
            charMap[char]++
        } else {
            // otherwise
            charMap[char] = 1
        }
    }
    // stores the properties of charMap
    charArray = Object.keys(charMap)
    // stores the values of charMap
    vaulesArray = Object.values(charMap)
    // returns maximum value in the valuesArray
    maxCharValue = Math.max(...vaulesArray)
    // getting index of charArr and postion where the index includes the max recurring character
    return charArray[vaulesArray.indexOf(maxCharValue)]
}



module.exports = maxRecurringChar;