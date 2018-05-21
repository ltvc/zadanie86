var a=prompt ('Skrypt oblicza równanie; (a*a)-(2*a*b)-(b*b), podaj a:');
var b=prompt ('podaj b:');
var value= (a*a) - (2*a*b)-(b*b);
console.log(value);
if (value >0) {
	alert ('Wynik dodatni='+value);
	console.log('Wynik dodatni');}
else if (value < 0) {
	alert ('Wynik ujemny='+value);
	console.log('Wynik ujemny');}
else {
	alert ('Wynik rowniania-zero='+value);
	console.log('Wynik rowniania-zero');}
