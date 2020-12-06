const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n')
	seatNumber(array)
})
const getColumn = (seat, min, max, minChar, maxChar) => {
	let minS = min
	let maxS = max
	let seatColumn = 0
	seat.split('').forEach((char, idx) => {
		if (idx === seat.length - 1) {
			seatColumn = char === minChar ? minS : maxS - 1
		} else {
			let diff = (maxS - minS) / 2
			if (char === minChar) seatColumn = maxS -= diff
			if (char === maxChar) seatColumn = minS += diff
		}
	})
	return seatColumn
}
const seatNumber = data => {
	const seat = []
	data.forEach(ticket => {
		let row = getColumn(ticket.substring(0, 7), 0, 128, 'F', 'B')
		let column = getColumn(ticket.substring(7), 0, 8, 'L', 'R')
		seat.push([row, column])
	})

	const high = seat.map((item, idx) => item[0] * 8 + item[1])
	console.log(Math.max(...high))
	const missing = []
	for (var i = 1; i <= sorted.length; i++) {
		if (high.indexOf(i) == -1) {
			missing.push(i)
		}
	}
	console.log(missing)
}
