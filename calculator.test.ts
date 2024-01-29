const add = (num1: number, num2: number) => {
	return num1 + num2;
}

describe("calculator", () => {
	it("should add two numbers", () => {
		const actual = add(3, 2);
		const expected = 5;
		expect(expected).toEqual(actual);
	});
});
