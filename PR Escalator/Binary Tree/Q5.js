// Check if a binary tree is balanced.

function isBalanced(root) {
    function check(node) {
        if (!node) return 0;

        let left = check(node.left);
        if (left === -1) return -1;

        let right = check(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }

    return check(root) !== -1;
}