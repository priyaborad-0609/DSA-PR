// Implement inorder traversal (recursive and iterative).

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Recursive
function inorderRecursive(root, result = []) {
    if (!root) return result;

    inorderRecursive(root.left, result);
    result.push(root.value);
    inorderRecursive(root.right, result);

    return result;
}

// Iterative
function inorderIterative(root) {
    let stack = [];
    let result = [];
    let current = root;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }

    return result;
}