const Node = require("./linkedlistnode");

class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtEnd(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAtBeginning(item) {
    const newNode = new Node(item, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
    }
  }

  deleteFromEnd() {
    let deletedNode = this.tail;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return deletedNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;

      return deletedNode;
    }
  }

  deleteFromBeginning() {
      let deletedNode = this.head;

      if(this.head === this.tail) {
          this.head = this.tail = null;
          return deletedNode;
      } else {
          let currentNode = this.head;
          this.head = currentNode.next;
          return deletedNode;
      }
  }
}

module.exports = linkedlist;
