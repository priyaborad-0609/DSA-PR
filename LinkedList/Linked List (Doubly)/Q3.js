// Reverse a doubly linked list.

function reverseDoublyList(head) {
    let current = head;
    let temp = null;

    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    if (temp) {
        head = temp.prev;
    }

    return head;
}