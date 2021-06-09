/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




const palindromeChecker = (text) => {
    text.toLowerCase()
    let reversed = text.split('').reverse().join('')
    return text === reversed

}



module.exports = palindromeChecker;