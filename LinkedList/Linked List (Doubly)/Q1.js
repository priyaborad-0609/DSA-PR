// Insert a node at the beginning of a doubly linked list.

class DoublyNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function insertAtBeginning(head, value) {
    let newNode = new DoublyNode(value);

    if (!head) return newNode;

    newNode.next = head;
    head.prev = newNode;

    return newNode;
}