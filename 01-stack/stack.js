class stack {
    constructor(data = []) {
        this.data = [];
        this.top = -1;
    }

    push(item) {
        if(!this.isFull()) {
            this.data.push(item);
            this.top++;
        }
    }

    peek() {
        if(!this.isEmpty()) {
            return this.data[this.top];
        }
    }

    pop() {
        if(!this.isEmpty()) {
            let data = this.data[this.top];
            this.top--;
            return data;
        }
    }

    isEmpty() {
        if(this.top === -1) {
            return true;
        } else return false;
    }

    isFull() {
        if(this.top === this.data.length) {
            return true;
        } else return false;
    }
}

module.exports = stack;