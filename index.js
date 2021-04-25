let opSpace = getElementById('op-space');
let resultSpace = getElementById('result-space');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function numberProcedure() {
	if (c > opponentsChoice) {
		resultSpace.innerHTML = `${c} won`;
	}

	if (c < opponentsChoice) {
		resultSpace.innerHTML = `${opponentsChoice} won`;
	}
}

function submit(c) {
	let opponentsChoice = getRndInteger(0, 2);

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

