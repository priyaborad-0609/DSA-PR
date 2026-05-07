// Delete a node from a circular linked list.

function deleteCircular(head, key) {
    if (!head) return null;

    let current = head;
    let prev = null;

    if (head.value === key && head.next === head) {
        return null;
    }

    if (head.value === key) {
        while (current.next !== head) {
            current = current.next;
        }

        current.next = head.next;
        return head.next;
    }

    prev = head;
    current = head.next;

    while (current !== head) {
        if (current.value === key) {
            prev.next = current.next;
            return head;
        }
        prev = current;
        current = current.next;
    }

    return head;
}