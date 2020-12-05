const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n\n')
	const newArray = array.map(line => {
		return line.replace(/\n/g, ' ')
	})

	createObject(newArray)
})

const createObject = data => {
	const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
	let validPassports = 0

	const dataObject = data.map(passport => {
		var properties = passport.split(' ')
		var obj = {}

		properties.forEach(function (property) {
			var tup = property.split(':')
			obj[tup[0]] = tup[1]
		})
		return obj
	})
	//solution 1
	// dataObject.forEach(passport => {
	// 	if (required.every(key => Object.keys(passport).includes(key))) {
	// 		validPassports++
	// 	}
	// })

	//solution 2
	const correctPassports = dataObject.filter(passport =>
		required.every(key => Object.keys(passport).includes(key))
	)
	const eyeCheck = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
	for (const passport of correctPassports) {
		const correctByr =
			passport.byr.length === 4 && passport.byr >= 1920 && passport.byr <= 2002
		const correctIyr =
			passport.iyr.length === 4 && passport.iyr >= 2010 && passport.iyr <= 2020
		const correctEyr =
			passport.eyr.length === 4 && passport.eyr >= 2020 && passport.eyr <= 2030
		let correctHgt = false
		let heightNr = parseFloat(passport.hgt.match(/(\d+)/)[0])
		if (passport.hgt.includes('cm') && heightNr >= 150 && heightNr <= 193) {
			correctHgt = true
		}
		if (passport.hgt.includes('in') && heightNr >= 59 && heightNr <= 76) {
			correctHgt = true
		}
		let correctHcl = false
		if (passport.hcl.match(/^#[a-f0-9]{6}$/i) !== null) {
			correctHcl = true
		}
		let correctEcl = false
		eyeCheck.forEach(item => {
			item === passport.ecl ? (correctEcl = true) : null
		})
		let correctPid = false
		if (!isNaN(passport.pid) && passport.pid.length === 9) {
			correctPid = true
		}

		if (
			correctByr &&
			correctIyr &&
			correctEyr &&
			correctHgt &&
			correctHcl &&
			correctEcl &&
			correctPid
		) {
			validPassports++
		}
	}
	console.log(validPassports)
}
