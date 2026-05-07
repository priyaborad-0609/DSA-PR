// ⁠Find the height of a binary tree.

function height(root) {
    if (!root) return 0;

    return 1 + Math.max(height(root.left), height(root.right));
}