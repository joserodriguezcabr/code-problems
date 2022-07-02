/*
    * Maximum Number of Balloons
    *
    * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
    * You can use each character in text at most once. Return the maximum number of instances that can be formed.
    * 
    * Example 1:
    *
    * Input: text = "nlaebolko"
    * Output: 1
    * 
    * Example 2:
    * 
    * Input: text = "loonbalxballpoon"
    * Output: 2
    * 
    * Example 3:
    * 
    * Input: text = "leetcode"
    * Output: 0
    * 
    * Constraints:
    * 
    * `1 <= text.length <= 104`
    * `text` consists of lower case English letters only.
*/

function maxNumberOfBallons (text: string): number {
    /*
        * a - has an ascii decimal value of 97
        * b - has an ascii decimal value of 98
        * l - has an ascii decimal value of 108
        * o - has an ascii decimal value of 111
        * n - has an ascii decimal value of 110
        * 
        * in a 26 item array, using a - <any other letter>
        * [0     1     ...     11     13     14     ...     25]
        *  a     b             l      n      o
    */

    // create a count array to keep track of letter instances
    // since text consists of lower case english letters
    // we can specifically create a 26 items array
    // const count: Array<number> = new Array(26).fill(0);
    const count: Array<number> = [...new Array(26)].map(()=> 0);;
    // loop through the text string and add instances of letters
    for (let i = 0; i < text.length; i++) {
        const index = text.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]++;
    }

    // look at the minimum instances that could make up the word
    // balloon, and return that

    // // there's only one 'a' in balloon
    let minNumber: number = count[0];
    // // there's only one 'b' in balloon
    minNumber = Math.min(minNumber, count[1]);
    // // there's 2 l in balloon
    minNumber = Math.min(minNumber, count[11] / 2);
    // // there's 2 o in balloon
    minNumber = Math.min(minNumber, count[14] / 2);
    // // there's only one n in balloon
    minNumber = Math.min(minNumber, count[13]);

    return minNumber;
}

console.log(maxNumberOfBallons("leetcode"));