let choiceArray = [[0, 'paper'], [1, 'scissors'], [2, 'rock']];

let opSpace = document.getElementById('op-space');
let resultSpace = document.getElementById('result-space');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function numberProcedure() {
	// TODO: put somewhere else to account for c;
	if (c[0] > opponentsChoice[0]) {
		resultSpace.innerHTML = `${c} won`;
	}

	if (c[0] < opponentsChoice[0]) {
		resultSpace.innerHTML = `${opponentsChoice} won`;
	}
}

function submit(c) {
	let opponentsNum = getRndInteger(0, 2);
	let opponentsChoice = choiceArray[opponentsNum];

	if (c[1] === 'paper' && opponentsChoice[1] === 'rock') {
		resultSpace.innerHTML = `${c} won`;
	} else {
		numberProcedure();
	}

	if (opponentsChoice[1] === 'paper' && c[1] === 'rock') {
		resultSpace.innerHTML = `${opponentsChoice} won`;
	} else {
		numberProcedure();
	}
}

