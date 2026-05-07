//  ⁠Implement a stack using a linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) return null;

        let removed = this.top;
        this.top = this.top.next;
        this.length--;

        return removed.value;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    size() {
        return this.length;
    }
}

// Example
let stack2 = new StackLinkedList();
stack2.push(5);
stack2.push(15);
stack2.push(25);

console.log(stack2.pop());   // 25
console.log(stack2.peek());  // 15