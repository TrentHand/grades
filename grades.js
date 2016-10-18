var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// these are the global variables used to populate the console and hold results
var Fs = 0;
var Ds = 0;
var Cs = 0;
var Bs = 0;
var As = 0;

var SumTotal = 0;


// the for loop helps me count through the scores array and count how many of each grade
for (i = 0; i < scores.length; i++) {
	var grades = scores[i];
  SumTotal += grades; //this is adding the value of score to SumTotal after each loop

		if (grades <= 60) {
			Fs++;
			// console.log("You grade is an F!");
						}
		else if (grades <= 70) {
				Ds++;
				// console.log("Your grade is a D!");
			}
		else if (grades <= 80) {
				Cs++;
				// console.log("Your grade is a C!");
			}
		else if (grades <= 90) {
				Bs++;
				// console.log("Your grade is a B!");
			}
		else if (grades <= 100) {
				As++;
			}
};
  // console.log(SumTotal + "SumTotal");

				console.log("There are " + Fs + " Fs," + " " + Ds + " Ds, " + " " + Cs + " Cs, " + Bs + " Bs," + " and " + As + " As in the class." ); 



var lowestGrade = scores.sort();
  console.log("The lowest grade is " + lowestGrade[0]);
  console.log("The highest grade is " + lowestGrade[lowestGrade.length-1]);


var average = SumTotal / scores.length;//This is how I can divide SumTotal to get an average
console.log(average + " is the average.")

