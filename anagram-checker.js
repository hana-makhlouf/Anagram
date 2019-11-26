
// More Information about this assisngment is available in the README.md file

/*- Create a function called `checkAnagram` that takes in 2 parameters; the source text, and the anagram text
- The function should return true if they are anagrams (same length and same letters) and return false if not
- If the two words are the same, they should not be considered anagrams
- The function should return a boolean value as soon as possible*/

const checkAnagram = (source, anagram)=>{
     //source = 'map';
    source = source.split('').sort().join('');

    // anagram = 'pam';
    anagram = anagram.split('').sort().join('');

    //test if they are the same word === and return false
    if(source===anagram){
        return true;
    }
    return false;
}


console.log(checkAnagram('map', 'amp'));