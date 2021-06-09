/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

  P: string
  R: string with first letter capitalized
  E: 'hello, world' => 'Hello World'
  P: split string into an array 
     iterate through arr and capitalize firs letter
     slice arr to keep rest of letters lowercase
     join array back into string
*/




const capSentence = text => {
  let textArr = text.toLowerCase().split(' ')
  let wordArr = textArr.map(el => el[0].toUpperCase() + el.slice(1))
  return wordArr.join(' ')
}

capSentence('hello world')




module.exports = capSentence