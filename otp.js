let number = [math.floor(math.random() * 100)];
const output = document.getElementById('output');
const button = document.getElementById('btn');
const input = document.getElementById('number-guessed');
button.addEventListener('click',function (argument) {
	// body...
	input.innerHTML = input.value;
	if (input ===number) {
		output.innerHTML = 'guess right';
	}else if(input < number){
		output.innerHTML ='guess too low';
	}else if(input > number){
		output.innerHTML ='guess too high';
	}else{
		alert('input field empty');
	};

})