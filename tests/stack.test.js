const Stack = require("../01-stack/stack");

describe("Stack", () => {
  test("should create an empty stack", () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
  });

  test("pushes 1,2,5 to stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(5);

    expect(stack.data.toString()).toBe("1,2,5");
  });

  test("peeks data from stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(9);

    expect(stack.peek()).toEqual(9);
  });

  test("check if stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(4);

    expect(stack.isEmpty()).toBeFalsy();
  });

  test("it should pop from the stack", () => {
    const stack = new Stack();
    stack.push(8);
    stack.push(9);
    stack.push(20);
    stack.push(5);

    expect(stack.pop()).toEqual(5);
  });
});
