//  ⁠Implement a circular queue.

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.frontIndex = -1;
        this.rearIndex = -1;
    }

    isFull() {
        return (this.rearIndex + 1) % this.size === this.frontIndex;
    }

    isEmpty() {
        return this.frontIndex === -1;
    }

    enqueue(value) {
        if (this.isFull()) return "Queue is Full";

        if (this.isEmpty()) {
            this.frontIndex = 0;
        }

        this.rearIndex = (this.rearIndex + 1) % this.size;
        this.queue[this.rearIndex] = value;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        let value = this.queue[this.frontIndex];

        if (this.frontIndex === this.rearIndex) {
            this.frontIndex = this.rearIndex = -1;
        } else {
            this.frontIndex = (this.frontIndex + 1) % this.size;
        }

        return value;
    }

    front() {
        return this.isEmpty() ? null : this.queue[this.frontIndex];
    }
}

// Example
let cq = new CircularQueue(3);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);

console.log(cq.dequeue()); // 10
cq.enqueue(40);

console.log(cq.front());   // 20