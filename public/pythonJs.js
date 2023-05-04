function print(text) {
	console.log(text)
}

function int(numberString) {
	return parseInt(numberString)
}

function float(numberString) {
	return parseFloat(numberString)
}

function string(number) {
	return number.toString()
}

function typeOf(Of) {
	if (!isNaN(Of)) {
		if (Number.isInteger(Of)) {
			return 'int'
		} else {
			return 'float'
		}
	} else {
		return 'string'
	}
}