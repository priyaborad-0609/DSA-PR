// Implement preorder traversal.

function preorder(root, result = []) {
    if (!root) return result;

    result.push(root.value);
    preorder(root.left, result);
    preorder(root.right, result);

    return result;
}