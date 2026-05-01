// ⁠Implement a deque using a doubly linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DequeDLL {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
        this.length = 0;
    }

    addFront(value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.frontNode = this.rearNode = newNode;
        } else {
            newNode.next = this.frontNode;
            this.frontNode.prev = newNode;
            this.frontNode = newNode;
        }

        this.length++;
    }

    addRear(value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.frontNode = this.rearNode = newNode;
        } else {
            newNode.prev = this.rearNode;
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }

        this.length++;
    }

    removeFront() {
        if (this.isEmpty()) return null;

        let value = this.frontNode.value;

        if (this.frontNode === this.rearNode) {
            this.frontNode = this.rearNode = null;
        } else {
            this.frontNode = this.frontNode.next;
            this.frontNode.prev = null;
        }

        this.length--;
        return value;
    }

    removeRear() {
        if (this.isEmpty()) return null;

        let value = this.rearNode.value;

        if (this.frontNode === this.rearNode) {
            this.frontNode = this.rearNode = null;
        } else {
            this.rearNode = this.rearNode.prev;
            this.rearNode.next = null;
        }

        this.length--;
        return value;
    }

    front() {
        return this.isEmpty() ? null : this.frontNode.value;
    }

    rear() {
        return this.isEmpty() ? null : this.rearNode.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}