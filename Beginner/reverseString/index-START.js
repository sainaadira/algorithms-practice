/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'


P: string
R: string (reversed)
E: 'hello' => 'olleh'
P: pass in text as an array (spread operator)
   reverse method to reverse elements in array
   join('') to convert into a string
*/


const reverseString = text => {
    return [...text].reverse().join('')
}



module.exports = reverseString