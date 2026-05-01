// Implement a queue using two stacks.

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    front() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example
let q2 = new QueueUsingStacks();
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);

console.log(q2.dequeue()); // 1
console.log(q2.front());   // 2