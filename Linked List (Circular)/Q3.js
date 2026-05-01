// Traverse a circular linked list.

function traverseCircular(head) {
    let result = [];
    if (!head) return result;

    let current = head;

    do {
        result.push(current.value);
        current = current.next;
    } while (current !== head);

    return result;
}