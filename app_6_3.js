function sum_thousand() {
	var first_no  = arguments[0];
	var second_no = arguments[1];
	
	var sum = (second_no*(second_no+first_no))/2
	console.log('Sum Of Thousand Numbers '+sum);
}
sum_thousand(1,1000);

