// Merge two sorted linked lists.

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.value < list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;
}