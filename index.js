let opSpace = getElementById('op-space');
let resultSpace = getElementById('result-space');

function numberProcedure() {
	if (c > opponentsChoice) {
		resultSpace.innerHTML = `${c} won`;
	}

	if (c < opponentsChoice) {
		resultSpace.innerHTML = `${opponentsChoice} won`;
	}
}

function submit(c) {
	opponentsChoice = // Select a random selection from an array

	if (c === 'paper' && opponentsChoice === 'rock') {
		resultSpace.innerHTML = `${c} won`;
	} else {
		numberProcedure();
	}

	if (opponentsChoice === 'paper' && c === 'rock') {
		resultSpace.innerHTML = `${opponentsChoice} won`;
	} else {
		numberProcedure();
	}
}

