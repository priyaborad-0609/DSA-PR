// ⁠Detect if a linked list is circular.

function isCircular(head) {
    if (!head) return false;

    let current = head.next;

    while (current && current !== head) {
        current = current.next;
    }

    return current === head;
}