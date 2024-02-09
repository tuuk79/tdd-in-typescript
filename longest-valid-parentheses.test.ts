function longestValidParentheses(s: string) {
  let stack = [-1];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0) {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return maxLen;
}

describe('longestValidParentheses', () => {
  it('should return 2 given ()', () => {
    const input = '()';
    const actual = longestValidParentheses(input);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return 4 given ()()', () => {
    const input = '()()';
    const actual = longestValidParentheses(input);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('should return 0 given ""', () => {
    const input = '';
    const actual = longestValidParentheses(input);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should return 2 given "(()"', () => {
    const input = '(()';
    const actual = longestValidParentheses(input);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return 2 given ")()"', () => {
    const input = ')()';
    const actual = longestValidParentheses(input);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return 2 given "()(()"', () => {
    const input = '()(()';
    const actual = longestValidParentheses(input);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return 6 given "()(())"', () => {
    const input = '()(())';
    const actual = longestValidParentheses(input);
    const expected = 6;
    expect(actual).toBe(expected);
  });
});
