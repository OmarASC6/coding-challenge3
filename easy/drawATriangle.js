/*
Draw a triangle
Create a function, named triangle, which takes an integer as a parameter and
returns a triangle made of asterixes. The input integer will always be
superior to 0.
console.log(triangle(1)) // returns "*"
console.log(triangle(3)) // returns "*
																		 **
																		 ***"
console.log(triangle(5)) // returns "*
																		 **
																		 ***
																		 ****
																		 *****"
*/
function triangle(n) {
    let x, y, z;
    for (x = 0; x <= 10; x++) {
        for (y = 0; y < x; y++) {
            z = z + ("*");
        }
        console.log(z);
        z = '';
    }
}
triangle(5);