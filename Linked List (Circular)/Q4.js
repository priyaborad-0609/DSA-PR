// ⁠Split a circular linked list into two halves.

function splitCircularList(head) {
    if (!head || head.next === head) {
        return [head, null];
    }

    let slow = head;
    let fast = head;

    while (fast.next !== head && fast.next.next !== head) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let head1 = head;
    let head2 = slow.next;

    slow.next = head1;

    if (fast.next.next === head) {
        fast = fast.next;
    }

    fast.next = head2;

    return [head1, head2];
}