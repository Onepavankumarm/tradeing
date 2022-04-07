function zigzagroot(root) {
    let result = [];
    let lot = (root, level) => {
        if (!root) return;
        if (result[level]) result[level].push(root.val);
        else result[level] = [root.val]
        lot(root.left, level + 1);
        lot(root.right, level + 1);
    }
    lot(root, 0)
    return result;
}
console.log(zigzagroot([3, 9, 20, null, null, 15, 7]))