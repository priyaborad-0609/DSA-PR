// ⁠Remove duplicates from a sorted doubly linked list.

function removeDuplicates(head) {
    let current = head;

    while (current && current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;

            if (current.next) {
                current.next.prev = current;
            }
        } else {
            current = current.next;
        }
    }

    return head;
}