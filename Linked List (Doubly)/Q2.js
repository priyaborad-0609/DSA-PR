// Delete a node from a doubly linked list.

function deleteNode(head, key) {
    if (!head) return null;

    let current = head;

    while (current && current.value !== key) {
        current = current.next;
    }

    if (!current) return head;

    if (current === head) {
        head = head.next;
        if (head) head.prev = null;
        return head;
    }

    if (current.next) {
        current.next.prev = current.prev;
    }

    if (current.prev) {
        current.prev.next = current.next;
    }

    return head;
}