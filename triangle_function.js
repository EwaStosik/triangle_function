function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	} else {
		return a*h/2; 
	} 
 
}

console.log(getTriangleArea(10, 6));
