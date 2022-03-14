export default function compareGuess(guess, solution) {
	return guess
		.toLowerCase()
		.split('')

		// greens pass
		.map((letter, index) => {
			if (letter === solution[index]) {
				solution = replaceAt(solution, index, 'G');
				return 'G';
			} else return letter
		})
		// yellows pass
		.map(letter => {
			if (isLowerCase(letter)) {
				if (solution.includes(letter)) {
					const index = solution.indexOf(letter);
					solution = replaceAt(solution, index, 'Y');
					return 'Y';
				} else return letter;
			} else return letter;
		})
		// greys pass
		.map(l => isLowerCase(l) ? 'B' : l)

		.join('');
}

const replaceAt = (string, index, replacement) => {
	return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}

function isLowerCase(letter) {
	return letter === letter.toLowerCase();
}
