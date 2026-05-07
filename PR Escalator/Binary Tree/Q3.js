// Implement postorder traversal.

function postorder(root, result = []) {
    if (!root) return result;

    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.value);

    return result;
}