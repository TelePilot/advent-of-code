const fs = require('fs')

fs.readFile('input.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n\n')
	//first solution

	// const newArray = array.map(line => {
	// 	const newLine = line.replace(/\n/g, '').split('\n')
	// 	return [...new Set(newLine[0].split(''))].join('')
	// })

	//Second Solution
	const newArray = array.map(line => {
		const newLine = line.replace(/\n/g, ' ').split(' ')
		let everyoneYes = 0
		if (newLine.length === 1) {
			everyoneYes = line.length
		}
		const duplicates = line.replace(/\n/g, '')
		const checkForDuplicates = duplicates
			.split('')
			.sort()
			.join('')
			.match(/(.)\1+/g)

		checkForDuplicates
			? checkForDuplicates.map(item => {
					if (item.length === newLine.length) {
						everyoneYes++
					}
					return
			  })
			: null

		return everyoneYes
	})

	groupAnswers(newArray)
})

const groupAnswers = data => {
	const answers = data.reduce((acc, curr) => acc + curr)
	//first solution
	//console.log(answers.length)

	//second solution
	console.log(answers)
}
