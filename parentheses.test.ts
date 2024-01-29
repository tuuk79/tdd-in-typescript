function isBalanced(input: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (char === '[') {
      stack.push(char);
    } else if (char === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

describe('parentheses', () => {
  it('should return true', () => {
    const input = '()';
    const actual = isBalanced(input);
    expect(actual).toBeTruthy();
  });

  it('should return false', () => {
    const input = '(])';
    const actual = isBalanced(input);
    expect(actual).toBeFalsy();
  });

  it('should return true', () => {
    const input = '((()))';
    const actual = isBalanced(input);
    expect(actual).toBeTruthy();
  });

  it('should return true', () => {
    const input = '()[]';
    const actual = isBalanced(input);
    expect(actual).toBeTruthy();
  });

  it('should return true', () => {
    const input = '([])';
    const actual = isBalanced(input);
    expect(actual).toBeTruthy();
  });

  it('should return false', () => {
    const input = '([(()])';
    const actual = isBalanced(input);
    expect(actual).toBeFalsy();
  });

  it('should return false', () => {
    const input = '][';
    const actual = isBalanced(input);
    expect(actual).toBeFalsy();
  });

  it('should return true', () => {
    const input = '([])()';
    const actual = isBalanced(input);
    expect(actual).toBeTruthy();
  });
});
