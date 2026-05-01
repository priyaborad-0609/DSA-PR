// Insert a node in a circular linked list.

class CircularNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertCircular(head, value) {
    let newNode = new CircularNode(value);

    if (!head) {
        newNode.next = newNode;
        return newNode;
    }

    let current = head;
    while (current.next !== head) {
        current = current.next;
    }

    current.next = newNode;
    newNode.next = head;

    return head;
}