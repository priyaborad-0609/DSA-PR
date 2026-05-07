// ⁠Find all pairs with a given sum in a sorted doubly linked list.

function findPairsWithSum(head, target) {
    let result = [];
    if (!head) return result;

    let left = head;
    let right = head;

    while (right.next) {
        right = right.next;
    }

    while (left !== right && right.next !== left) {
        let sum = left.value + right.value;

        if (sum === target) {
            result.push([left.value, right.value]);
            left = left.next;
            right = right.prev;
        } else if (sum < target) {
            left = left.next;
        } else {
            right = right.prev;
        }
    }

    return result;
}