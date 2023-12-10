function fizzbuzz(input: number) {
	if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz';
	if (input % 3 == 0) return 'Fizz';
	if (input % 5 == 0) return 'Buzz';
	return input.toString();
}

describe('fizzbuzz', () => {
	it('should accept a number as input and return it as a string', () => {
		const input = 2
		const actual = fizzbuzz(input)
		const expected = '2'
		expect(actual).toEqual(expected)
	})

	it('should return Fizz if number is multiple of 3', () => {
		const input = 3
		const actual = fizzbuzz(input)
		const expected = 'Fizz'
		expect(actual).toEqual(expected)
	})

	it('should return Buzz if number is multiple of 5', () => {
		const input = 5 
		const actual = fizzbuzz(input)
		const expected = 'Buzz'
		expect(actual).toEqual(expected)
	})

	it('should return FizzBuzz if number is multiple of 3 and 5', () => {
		const input = 15 
		const actual = fizzbuzz(input)
		const expected = 'FizzBuzz'
		expect(actual).toEqual(expected)
	})
})
