// remove for nc version
const readline = require('node:readline');
// import readline from 'node:readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stout,
});

// constants
p1 = "p1"
p2 = "p2"
p1store = "p1store"
p2store = "p2store"
p1Fields = ["a", "b", "c", "d", "e", "f"]
p2Fields = ["g", "h", "i", "j", "k", "l"]
p1Prompt = "Player 1, enter a field from A to F > "
p2Prompt = "Player 2, enter a field from G to L > "

// stats
// index 0: total captures made
// index 1: sum of all capture yields
// subtract count from total to get amount truly captured
p1CaptureStats = [0, 0]
p2CaptureStats = [0, 0]
// p1CapturedCounter = 0
// p1CapturedYield = 0
// p2CapturedCounter = 0
// p2CapturedYield = 0

commandListPrompt = "Enter 'help' for a list of commands."
commandList = "show current board: 'show board' or exit menu: 'exit'"

const createField = (marker, harvest, type, captureCount, oppositeField, nextField) => ({
	marker,
	harvest,
	type,
	captureCount,
	oppositeField,
	nextField
});

const createBoard = () => {
	lField = createField("l", 3, "field", 0, null, null)
	kField = createField("k", 2, "field", 0, null, lField)
	jField = createField("j", 0, "field", 0, null, kField)
	iField = createField("i", 1, "field", 0, null, jField)
	hField = createField("h", 1, "field", 0, null, iField)
	gField = createField("g", 2, "field", 0, null, hField)

	p1Store = createField("p1store", 1, "store", 0, null, gField)

	fField = createField("f", 1, "field", 0, gField, p1Store)
	eField = createField("e", 1, "field", 0, hField, fField)
	dField = createField("d", 0, "field", 0, iField, eField)
	cField = createField("c", 1, "field", 0, jField, dField)
	bField = createField("b", 0, "field", 0, kField, cField)
	aField = createField("a", 1, "field", 0, lField, bField)

	p2Store = createField("p2store", 0, "store", 0, null, aField)

	lField.oppositeField = aField
	lField.nextField = p2Store
	kField.oppositeField = bField
	jField.oppositeField = cField
	iField.oppositeField = dField
	hField.oppositeField = eField
	gField.oppositeField = fField

	return aField;
}

// board order
// p2 store
// a, b, c, d, e, f (left to right P1 fields)
// p1 store
// g, h, i, j, k, l (right to left P2 fields)
// p2 store (board loop complete)


const playerTurnLoop = (whosTurnIsIt, currentBoard) => {
	// better way to loop through prompts besides double while?
	let currentFields = p1Fields

	// need input from user, toLowercase
	let inputLowered = "a"

	let playerInputIsNotValid = false

	while (!playerInputIsNotValid) {
		// check validity with array
		const playIsValid = currentFields.contains(inputLowered)

		let playerIsInHelpMenu = false

		if (inputLowered === "help") {
			playerIsInHelpMenu = true
			while (playerIsInHelpMenu) {
				// commands with switch/case?
				if (inputLowered === "exit") {
					playerIsInHelpMenu = false
				}
			}
		} else if (!playIsValid) {
			console.log("invalid field")
			continue;
		}

		if (playIsValid) {
			// if zero, log
			// else; player
		}
	}

	// disperse logic
}

// same function in py
const checkGameStatus = (currentBoard) => {
	// assign start cells
	// check if either side all fields are empty
	// collect harvests
	// update store
}

const mancalaStart = () => {
	const board = createBoard();
	// console.log(board)

	// determine player order
  // start player turn loop
  // // check play validity
  // // return next player
  // check if game over

	let whosTurnIsIt = p1
	let gameIsOngoing = true

	while (gameIsOngoing) {
		while (whosTurnIsIt === p1) {
			const nextPlayer = playerTurnLoop(whosTurnIsIt, board);
			const isGameEnded = checkGameStatus(board);

			if (isGameEnded) {
				gameIsOngoing = false;
				break;
			}
			if (nextPlayer === p2) {
				whosTurnIsIt = p2;
				break;
			}
		}

		while (whosTurnIsIt === p2) {
			const nextPlayer = playerTurnLoop(whosTurnIsIt, board);
			const isGameEnded = checkGameStatus(board);

			if (isGameEnded) {
				gameIsOngoing = false;
				break;
			}
			if (nextPlayer === p1) {
				whosTurnIsIt = p1;
				break;
			}
		}
	}
}

// rl.question('input: ', input => {
//   console.log('terminal input: ', input);
//   rl.close();
// });

mancalaStart()
