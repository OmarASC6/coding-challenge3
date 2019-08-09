// Century From Year
/*
The first century spans from the year 1 up to and including the year 100,
The second - from the year 101 up to and including the year 200, etc.
Task:
Given a year (number), return the century (string) it is in.
Input, Output Examples:
	console.log(centuryFromYear(1705))   //returns "18th century"
	console.log(centuryFromYear(1900))   //returns "19th century"
	console.log(centuryFromYear(1601))   //returns "17th century"
	console.log(centuryFromYear(2000))  //returns "20th century"
	console.log(centuryFromYear(100))  //returns "1st century"
*/
//===============================================

function centuryYear(year){
    if (year % 100 === 0){
      return year / 100;
    }else {
      let remainder = year % 100;
      return ((year + 100) - remainder) / 100;
    }
  }
  console.log(centuryYear(2019));


