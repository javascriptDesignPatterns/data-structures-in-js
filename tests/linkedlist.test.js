const util = require("util");
const LinkedList = require("../03-linkedlist/linkedlist");

describe("Linked List", () => {
  test("it should create an empty linked list", () => {
    const ll = new LinkedList();

    expect(ll).not.toBeNull();
  });

  test("it should add a node to the end of the list", () => {
    const ll = new LinkedList();

    ll.insertAtEnd(8);
    expect(ll.head.data).toEqual(8);
    expect(ll.tail.data).toEqual(8);

    ll.insertAtEnd(10);
    expect(ll.head.data).toEqual(8);
    expect(ll.tail.data).toEqual(10);
  });

  test("it should add a node to the beginning of the list", () => {
    const ll = new LinkedList();

    ll.insertAtBeginning(9);
    ll.insertAtBeginning(10);

    expect(ll.head.data).toEqual(10);
    expect(ll.head.next.data).toEqual(9);
  });

  test("it should delete a node from the tail", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(8);
    ll.insertAtEnd(6);

    const deletedNode = ll.deleteFromEnd();
    expect(deletedNode.data).toEqual(6);
    expect(ll.head.data).toEqual(8);
    expect(ll.tail.data).toEqual(8);
    expect(ll.tail.next).toBeNull();
  });

  test("it should delete a node from the head", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(89);
    ll.insertAtEnd(43);
    ll.insertAtBeginning(98);

    const deletedNode = ll.deleteFromBeginning();
    expect(deletedNode.data).toEqual(98);
    expect(ll.head.data).toEqual(89);
    expect(ll.tail.data).toEqual(43);
    expect(ll.head.next).not.toBeNull();
  });
});
