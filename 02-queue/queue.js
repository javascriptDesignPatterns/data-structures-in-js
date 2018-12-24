class queue {
  constructor(data = []) {
    this.data = data;
    this.front = -1;
    this.rear = -1;
  }

  insert(item) {
    if (this.front === -1 && this.rear === -1) {
      this.front = this.rear = 0;
    } else this.rear++;
    this.data[this.rear] = item;
  }

  remove() {
    if (!this.isEmpty()) {
      let val = this.data[this.front];
      this.front++;

      if (this.front > this.rear) {
        this.front = this.rear = -1;
      }
      return val;
    }
  }

  peek() {
      if(!this.isEmpty()) {
          return this.data[this.front];
      }
  }

  isEmpty() {
    if (this.front === -1 || this.front > this.rear) {
      return true;
    } else return false;
  }
}

module.exports = queue;
