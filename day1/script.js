const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n').map(item => parseInt(item, 10))
	//Solution 1
	loop1: for (let i = 0; i < array.length; i++) {
		const value = array[i]
		for (let i2 = 0; i2 < array.length; i2++) {
			const value2 = array[i2]
			if (value + value2 === 2020) {
				console.log(value, value2, value * value2)
				break loop1
			}
		}
	}
	//Solution 2
	loop2: for (let i = 0; i < array.length; i++) {
		const value = array[i]
		for (let i2 = 0; i2 < array.length; i2++) {
			const value2 = array[i2]
			for (let i3 = 0; i3 < array.length; i3++) {
				const value3 = array[i3]
				if (value + value2 + value3 === 2020) {
					console.log(value, value2, value3, value * value2 * value3)
					break loop2
				}
			}
		}
	}
})
