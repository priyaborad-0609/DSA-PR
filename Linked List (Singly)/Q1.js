// Reverse a singly linked list.

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}