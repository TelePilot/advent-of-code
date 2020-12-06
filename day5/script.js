const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n')
	seatNumber(array)
})
const getColumn = (seat, min, max, leftChar) => {
	let minS = min
	let maxS = max
	let seatColumn = 0
	seat.split('').forEach((char, idx) => {
		if (idx === seat.length - 1) {
			seatColumn = char === leftChar ? minS : maxS - 1
		} else {
			let diff = (maxS - minS) / 2
			if (char === leftChar) {
				seatColumn = maxS -= diff
			} else {
				seatColumn = minS += diff
			}
		}
	})
	return seatColumn
}
const seatNumber = data => {
	const seat = []
	data.forEach(ticket => {
		let row = getColumn(ticket.substring(0, 7), 0, 128, 'F')
		let column = getColumn(ticket.substring(7), 0, 8, 'L')
		seat.push([row, column])
	})

	const high = seat.map(item => item[0] * 8 + item[1])

	const missing = []
	for (var i = 1; i <= high.length; i++) {
		if (high.indexOf(i) == -1) {
			missing.push(i)
		}
	}
	//solution 1
	console.log(Math.max(...high))
	//solution 2
	console.log(missing)
}
