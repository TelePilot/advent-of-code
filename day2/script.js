const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n')
	checkPasswords(array)
})

const checkPasswords = data => {
	let validPasswords = 0
	let validPasswords2 = 0
	for (let i = 0; i < data.length; i++) {
		let currentline = data[i].split(':')
		let letter = currentline[0].split(' ')
		let minMax = letter[0].split('-')

		let passCheck = currentline[1].split(letter[1]).length - 1
		if (passCheck >= Number(minMax[0]) && passCheck <= Number(minMax[1])) {
			validPasswords++
		}
		if (
			(currentline[1][minMax[0]] === letter[1] ||
				currentline[1][minMax[1]] === letter[1]) &&
			currentline[1][minMax[0]] !== currentline[1][minMax[1]]
		) {
			validPasswords2++
		}
	}

	console.log(validPasswords, validPasswords2)
}
