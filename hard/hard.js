//! IMPORTANT:
//! Create a repositary named coding-challenge1, then clone it in your
//! Documents folder. Create 3 folders inside the newly created folder,
//! Name them easy, medium and hard.
//! Create ONE .js file PER coding challenge inside the relevant folder, named after the challenge.
//! Copy the challlenge prompt and start your code after.

//===============================================
/*
Draw a diamond
Create a function, named diamond, which takes an integer as a parameter and
returns a diamond made of asterixes. The input integer will always be
superior to 0.
console.log(diamond(1)) // returns "*
                                    *"
console.log(diamond(3)) // returns " *
											              ***
                                   *****
                                    ***
                                     *"
console.log(diamond(5)) // returns " *
											              ***
											             *****
										              *******
                                 *********
                                  *******
                                   *****
                                    ***
                                     *"
Note:
Adding "\n" to a string creates a new line.
*/
//===============================================

/*
Is Johnny making progress?
To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
Examples
console.log(progressDays([3, 4, 1, 2])) // ➞ 2 There are two progress days, (3->4) and (1->2)
console.log(progressDays([10, 11, 12, 9, 10])) // ➞ 3
console.log(progressDays([6, 5, 4, 3, 2, 9])) // ➞ 1
console.log(progressDays([9, 9]))  // ➞ 0
console.log(progressDays([9, 10, 11]))  // ➞ 2
Notes
Running the same number of miles as last week does not count as a progress day.
The input array will always have at least ONE element and each integer will
always be > 0.
*/
//===============================================

/*
H4ck3r Sp34k
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. All input will be in lower case.
Examples
console.log(hackerSpeak("javascript is cool")) //➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")) //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")) //➞ "b3c0m3 4 c0d3r"
console.log(hackerSpeak("br")) //➞ "br"
console.log(hackerSpeak("")) //➞ ""
Notes
In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
*/
//===============================================

/*
Odd Up, Even Down — N Times
Create a function that performs an even-odd transform to an array, n times. The input is an array of 3 integers >= 0, and an integer >= 0. Each even-odd transformation:
Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.
Examples
console.log(evenOddTransform([3, 4, 9], 3)) //➞ [9, -2, 15] Since [3, 4, 9] ➞ [5, 2, 11] ➞ [7, 0, 13] ➞ [9, -2, 15]
console.log(evenOddTransform([0, 0, 0], 10)) //➞ [-20, -20, -20]
console.log(evenOddTransform([1, 2, 3], 1)) //➞ [3, 0, 5]
console.log(evenOddTransform([1, 2, 3], 0)) //➞ [1, 2, 3]
*/