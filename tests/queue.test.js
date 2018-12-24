const Queue = require("../02-queue/queue");

describe("Queue", () => {
  test("it should create an empty queue", () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
  });

  test("add data to queue", () => {
    const queue = new Queue();
    queue.insert(7);
    queue.insert(9);

    expect(queue.data.toString()).toBe("7,9");
  });

  test("peek data from queue", () => {
    const queue = new Queue();
    queue.insert(9);
    queue.insert(5);
    expect(queue.peek()).toEqual(9);
  });

  test("check if queue is empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();

    queue.insert(8);
    queue.insert(5);
    queue.insert(3);

    expect(queue.isEmpty()).toBeFalsy();
  });
});
