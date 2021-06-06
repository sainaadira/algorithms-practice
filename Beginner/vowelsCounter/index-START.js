/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3

P: string
R: number (vowels present in agrument)
E: 'count me' => 3 
P: pass vowels into a string in an array
   create variable to hold count and initialize to 0
   iterate though string (text)
   convert string into lowercase 
    -- use includs() on vowels array to check if vowels are present in text, if so update count
   return count


   for.. of: iterates through objects
   -- iterates through each letter of the text
*/

const vowelsCounter = text => {
    const vowels = [...'aeiou']
    let count = 0

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

vowelsCounter('count me')



module.exports = vowelsCounter;
