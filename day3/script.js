const fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
	if (err) throw err
	let array = data.split('\n')
	checkTrees(array, 3, 1)
	checkTrees2(array)
})

const checkTrees = (data, right, down) => {
	let position = 0
	let trees = 0
	for (let i = 0; i < data.length; i += down) {
		data[i][position] === '#' ? trees++ : null
		position += right
		if (position > 30) {
			position -= 31
		}
	}
	console.log(trees)
}

const checkTrees2 = data => {
	let treeArray = []
	let routes = [
		[1, 1],
		[3, 1],
		[5, 1],
		[7, 1],
		[1, 2],
	]

	for (let i = 0; i < routes.length; i++) {
		let right = routes[i][0]
		let down = routes[i][1]
		let position = 0
		let trees = 0
		for (let i = 0; i < data.length; i += down) {
			data[i][position] === '#' ? trees++ : null
			position += right
			if (position > 30) {
				position -= 31
			}
		}
		treeArray.push(trees)
	}
	let result = treeArray.reduce((acc, curr) => acc * curr)
	console.log(result)
}
